### Hi 👋

I'm **Seth Wheeler**, a software engineer and graduate student.

I work on platform and integration engineering (Node.js microservices, Kubernetes,
CI/CD) and, increasingly, AI and LLM tooling such as Model Context Protocol servers
and retrieval-augmented assistants.

I reimplement systems I want to understand, then write down where my design turned
out to be wrong. The write-up is usually the more useful half.

**Working with:** JavaScript / TypeScript · Node.js · Python · Swift · SQL ·
Kubernetes · Docker · CI/CD · MongoDB / Postgres · MCP and LLM integration

**A few things I've built:**

- 🧩 [**nodejs-k8s**](https://github.com/Megapixel99/nodejs-k8s) · Kubernetes' core
  APIs reimplemented in Node. Point your real `kubectl` at it and it answers, using
  standard YAML.
- 🎭 [**social-deduction-bench**](https://github.com/Megapixel99/social-deduction-bench)
  · Social deduction as an LLM benchmark, scored per turn and corrected for chance
  rather than ranked by win rate. 522 games across 19 models, with a rule-based
  control that nothing has beaten.
- 🔎 [**webCrawler**](https://github.com/Megapixel99/webCrawler) · A search engine
  (crawler, hand-built inverted index, BM25 ranker) with no search library. Its
  politeness limiter survives a hundred concurrent worker processes, asserted
  against what the crawled server received rather than what the limiter reported.
- 🗄️ [**sql-nodejs**](https://github.com/Megapixel99/sql-nodejs) · An in-memory SQL
  engine on npm with genuinely zero dependencies; both `dependencies` and
  `devDependencies` are empty, and the README says exactly where it stops.
- 🎬 [**video-timeline**](https://github.com/Megapixel99/video-timeline) · Hands a
  video to a language model as a measured timeline (shot boundaries, camera motion,
  on-screen text, audio activity) rather than a pile of screenshots.
- 📦 [**Postmastr**](https://github.com/Megapixel99/Postmastr-Backend) · A mailroom
  tracker that reads a shipping label off a photo and emails the recipient.

[![Megapixel99's GitHub stats](https://github-stats-extended.vercel.app/api?username=megapixel99&count_private=true&show_icons=true&theme=dracula)](https://github.com/anuraghazra/github-readme-stats)
