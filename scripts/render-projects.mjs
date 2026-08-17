#!/usr/bin/env node
/**
 * Rewrite the project list in README.md from the personal site's data.
 *
 *   node scripts/render-projects.mjs           # rewrite README.md
 *   node scripts/render-projects.mjs --check   # fail if it would change
 *
 * The site at github.com/Megapixel99/personal-site already decides which
 * projects are worth listing, in projects.policy.json, and a repository with no
 * recorded decision fails its build. That gate is the reason this file does no
 * choosing of its own: it fetches the result and renders it. Duplicating the
 * selection here would mean two lists that agree until they do not, which is
 * what the hand-written version of this README was already doing.
 *
 * Only the list between the markers is generated. Everything else in the README,
 * including the whole of the "about me", stays hand-written, because five
 * sentences that change twice a year are not worth a workflow and prose is the
 * one thing a cron job cannot check it has got right.
 */
import { readFile, writeFile } from 'node:fs/promises';

/** PROJECTS_SOURCE overrides the URL, which is how this gets tested before a deploy. */
const SOURCE =
  process.env.PROJECTS_SOURCE ??
  'https://sethwheeler.dev/projects.json';

const README = new URL('../README.md', import.meta.url);
const START = '<!-- projects:start -->';
const END = '<!-- projects:end -->';
const CHECK = process.argv.includes('--check');

/**
 * Decoration, and deliberately optional. A project added on the site appears
 * here on the next run whether or not it is in this map, because requiring a
 * matching entry would mean the automation stops at exactly the moment it is
 * supposed to help. An unmapped project simply renders without one.
 */
const EMOJI = {
  'nodejs-k8s': '🧩',
  'social-deduction-bench': '🎭',
  webCrawler: '🔎',
  'sql-nodejs': '🗄️',
  'video-timeline': '🎬',
  'Postmastr-Backend': '📦',
};

/** Postmastr-Backend reads better as Postmastr in a sentence about the thing. */
const DISPLAY = {
  'Postmastr-Backend': 'Postmastr',
};

/*
 * A DNS failure or a refused connection throws rather than returning a response,
 * and an uncaught one prints a stack trace into the workflow log, which reads as
 * a broken script rather than an unreachable site. Both failures mean the same
 * thing here and deserve the same one line.
 */
let repos;
try {
  const res = await fetch(SOURCE, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  ({ repos } = await res.json());
} catch (err) {
  console.error(`could not read the site's project data: ${err.message}`);
  console.error(SOURCE);
  console.error('The README is left as it is; a later run picks it up.');
  process.exit(1);
}

const names = Object.keys(repos ?? {});
if (names.length === 0) {
  // An empty list is far more likely to be a bad fetch than a real answer, and
  // it would silently delete the most useful part of the page.
  console.error('the site lists no projects; refusing to empty the README');
  process.exit(1);
}

/*
 * Most-starred first, then alphabetically. The source file is keyed by
 * repository name and so arrives alphabetical, which is an accident of how it
 * is stored rather than a judgement, and it buries the one project with real
 * traction in the middle of the list. Stars are a poor measure of what is
 * interesting, but they are the only ranking either surface has, and a reader
 * skimming a profile reads the first entry.
 */
const ordered = names.sort(
  (a, b) => (repos[b].stars ?? 0) - (repos[a].stars ?? 0) || a.localeCompare(b),
);

const lines = ordered.map((full) => {
  const { url, summary } = repos[full];
  /*
   * A project with no summary would render "undefined" into the README and read
   * as a broken entry rather than a missing field. The site's own build refuses
   * to publish one, so seeing it here means this is reading an older revision of
   * that file than the one that introduced them.
   */
  if (!summary) {
    console.error(`${full} has no summary in the site's project data.`);
    console.error(`Add one to projects.policy.json in personal-site and let its workflow`);
    console.error(`regenerate ${SOURCE.split('/').at(-1)}.`);
    process.exit(1);
  }
  const short = full.split('/').at(-1);
  const label = DISPLAY[short] ?? short;
  const emoji = EMOJI[short] ? `${EMOJI[short]} ` : '';
  return `- ${emoji}[**${label}**](${url}) · ${summary}`;
});

const block = `${START}\n\n${lines.join('\n')}\n\n${END}`;

const current = await readFile(README, 'utf8');
if (!current.includes(START) || !current.includes(END)) {
  console.error(`README.md has no ${START} / ${END} markers to write between.`);
  process.exit(1);
}

const next = current.replace(
  new RegExp(`${START}[\\s\\S]*?${END}`),
  // A summary can contain $&, and String.replace would expand it.
  () => block,
);

if (next === current) {
  console.log(`no change (${lines.length} projects)`);
  process.exit(0);
}

if (CHECK) {
  console.error('README.md is out of date. Run: node scripts/render-projects.mjs');
  process.exit(1);
}

await writeFile(README, next);
console.log(`wrote README.md (${lines.length} projects)`);
