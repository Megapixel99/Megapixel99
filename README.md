### Hi 👋

I'm **Seth Wheeler**, a software engineer and graduate student.

I work on platform and integration engineering (Node.js microservices, Kubernetes,
CI/CD), and lately on a family of small command line tools that ask whether a check
is really checking anything: whether a green run executed a test at all, whether a
guard is capable of failing, whether a function gives one answer to one input. Six
of them are on PyPI (`assay-checks`, `canfail`, `didrun`, `nondet`,
`restore-verified`, `undetermined`), and four of those publish the same version
number to npm out of the same tree, so the two registries can be compared rather
than taken on trust.

I reimplement systems I want to understand, then write down where my design turned
out to be wrong. The write-up is usually the more useful half.

**Working with:** JavaScript / TypeScript · Node.js · Python · Swift · SQL ·
Kubernetes · Docker · CI/CD · MongoDB / Postgres · PyPI and npm packaging ·
LLM evaluation

**A few things I've built:**

<!-- projects:start -->

- 🧩 [**nodejs-k8s**](https://github.com/Megapixel99/nodejs-k8s) · Kubernetes' core APIs reimplemented in Node. Point your real `kubectl` at it and it answers.
- 📦 [**Postmastr**](https://github.com/Megapixel99/Postmastr-Backend) · A mailroom tracker that reads a shipping label off a photo and emails the recipient.
- [**assay-checks**](https://github.com/Megapixel99/assay-checks) · Audits mutation harnesses for the six ways a green run can be a lie, and finds functions that already answer the question by running them rather than by reading their names.
- [**kestrel**](https://github.com/Megapixel99/kestrel) · A macOS browser with a memory budget for tabs. Above the budget's feasibility floor it holds 788 MB where discarding holds 802 MB, and destroys 6 tabs to its 8.
- [**lambda-language**](https://github.com/Megapixel99/lambda-language) · A small language with four independent backends (C, WebAssembly, ARM64, a bytecode VM) that have to agree byte for byte, and a compiler for it written in itself.
- 🎭 [**social-deduction-bench**](https://github.com/Megapixel99/social-deduction-bench) · Social deduction as an LLM benchmark, scored per turn and corrected for chance rather than ranked by win rate.
- 🗄️ [**sql-nodejs**](https://github.com/Megapixel99/sql-nodejs) · An in-memory SQL engine with a hand-written parser and genuinely zero dependencies.
- 🎬 [**video-timeline**](https://github.com/Megapixel99/video-timeline) · Hands a video to a language model as a measured timeline, not a pile of screenshots.
- 🔎 [**webCrawler**](https://github.com/Megapixel99/webCrawler) · A search engine (crawler, inverted index, BM25 ranker) with no search library.

<!-- projects:end -->

[![Megapixel99's GitHub stats](https://github-stats-extended.vercel.app/api?username=megapixel99&count_private=true&show_icons=true&theme=dracula)](https://github.com/anuraghazra/github-readme-stats)
