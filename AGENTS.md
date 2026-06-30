# AGENTS.md

## Cursor Cloud specific instructions

This is a single **Nuxt 4** app (`bradsiefert.com`) — a personal portfolio + blog. It is content-driven via `@nuxt/content` (Markdown in `content/` compiled into an in-process SQLite DB via `better-sqlite3`). There is no separate backend, database server, or auth.

### Services
- **Nuxt dev server** is the entire product. Run `npm run dev` → serves on `http://localhost:3000`. `@nuxt/content` compiles Markdown to `.data/content/contents.sqlite` in-process; no external DB to start.

### Commands (see `package.json`)
- Dev: `npm run dev`
- Build (SSR/Nitro): `npm run build` (output in `.output/`)
- Static generate: `npm run generate`
- Preview prod build: `npm run preview`
- Tests: none defined. Lint: none defined. Don't invent them.

### Non-obvious notes
- `/blog` and `/portfolio` return a `301` to the trailing-slash URL (`/blog/`); follow redirects when curling.
- The contact form (`pages/contact.vue`) uses Netlify Forms (`data-netlify="true"`, `action="/success"`). The page renders fine under `npm run dev`, but actual form submission only works on Netlify infra (`npx netlify dev` or a deploy) — expected, not a bug.
- `better-sqlite3` is a native addon; it builds/links on `npm install`. Prebuilt binaries cover Node 22 here.
- `deno.lock` is only for the Netlify edge bootstrap; the project itself is npm-based.
