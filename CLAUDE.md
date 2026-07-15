# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Web-Tool.Shop is a static, no-build-framework collection of browser-only web utilities (JSON/XML/SQL/CSV formatters, text tools, design tools, CSS art, etc.) deployed to GitHub Pages. There is no server-side component and no bundler — every tool runs entirely client-side. The site supports 4 languages (`ko`, `en`, `ja`, `zh`) and dark mode, and pages are added as plain HTML/JS/CSS following a fixed directory convention.

## Commands

```bash
npm run build         # full pipeline: build:css -> apply:env -> apply:guides -> apply:seo -> check:links -> check:i18n -> smoke:format
npm run dev            # browser-sync dev server on :3000 with live reload (HTML/JS/CSS)
npm run watch:css       # rebuilds assets/css/styles.css from Less on every change (run alongside npm run dev)
npm run build:css       # one-shot lessc compile of assets/less/styles.less -> assets/css/styles.css
npm run apply:env       # injects .env values (site URL, AdSense, verification meta) into index.html/robots.txt/sitemap.xml/ads.txt
npm run apply:guides    # injects the localized "usage guide" block (TOOL_GUIDE markers) into each tool page
npm run apply:seo       # injects per-page SEO meta, canonical/OG/Twitter tags, structured data, breadcrumbs
npm run check:links     # verifies every local href/src target in *.html actually exists on disk
npm run check:i18n      # verifies every visible string/attribute has ko/en/ja/zh coverage in assets/js/i18n.js
npm run smoke:format    # runs scripts/smoke-format-utils.js against assets/js/format-utils.js
npm run generate:emoji  # regenerates assets/js/emoji-data.js (only needed when updating emoji tool coverage)
```

There is no unit test framework. "Tests" are the checks above plus Node syntax checks. Run these before committing:

```bash
npm run build
node --check assets/js/i18n.js
node --check assets/js/site-shell.js
node --check tools/<category>/<tool-name>/tool.js   # for any tool.js you touched
```

For local manual verification, use port 3001 (leave 3000 free for the user):

```bash
npx browser-sync start --server . --files "*.html,tools/**/*.html,tools/**/*.js,assets/css/*.css,assets/js/*.js" --port 3001 --no-open
```

Local env config lives in `.env` (gitignored); only `.env.example` is committed. Key vars: `GITHUB_USERNAME`, `GITHUB_REPOSITORY_NAME`, `SITE_URL`, `ADSENSE_CLIENT`, `ADSENSE_PUBLISHER_ID`, `GOOGLE_SITE_VERIFICATION`, `NAVER_SITE_VERIFICATION`.

## Architecture

### Page structure and shared shell

Tools live at `tools/<category>/<tool-name>/index.html` (+ optional `tool.js`). Every page must load, in this order (all `defer`):

```html
<script defer src="../../../assets/js/site-shell.js"></script>
<script defer src="../../../assets/js/i18n.js"></script>
<script defer src="./tool.js"></script>
<script defer src="../../../assets/js/recent-tools.js"></script>
```

- `assets/js/site-shell.js` builds and installs the shared `<header>`/`<footer>` (nav items, brand, footer links) on every page, replacing any static markup. It must install the header before `i18n.js` injects the language selector into it.
- `assets/js/i18n.js` (~100KB) is the single source of truth for all user-visible copy: `textTranslations` (body text), `attributeTranslations` (placeholder/aria-label/title), and `pageTranslations` (per-URL `<title>`/meta description, keyed by exact deployed path). It also owns the language selector, locale persistence (query param `?locale=` + localStorage + browser language fallback to `ko`), and rewrites internal links to carry `?locale=`. Dynamic JS strings must go through `window.gadgetTranslate()` (or a local `message()` wrapper) rather than being hardcoded.
- `assets/js/recent-tools.js` owns recently-used/favorites tracking and the shared copy-icon behavior for result panels — don't build one-off copy buttons per tool.
- `assets/js/format-utils.js` holds shared parsing/formatting logic (JSON auto-repair, SQL formatting, delimited/CSV parsing) reused across the data-format tools; it's also loaded directly by Node in `scripts/smoke-format-utils.js` via `global.window = global`.
- `assets/js/emoji-data.js` is generated (Unicode + multilingual search keywords) — never hand-edit; regenerate with `npm run generate:emoji`.

### Styling

Source of truth is `assets/less/styles.less`; the committed `assets/css/styles.css` is a compiled artifact (GitHub Pages doesn't compile Less) and must be regenerated via `npm run build` (or `build:css`) after any Less edit — never hand-edit the compiled CSS. Reuse existing shared classes (`tool-shell`, `tool-grid`, `tool-input`, `tool-textarea`, `result-panel`, `form-grid`) instead of introducing new one-off layout CSS. Must stay dark-mode and mobile-responsive (no horizontal scroll except intentionally-scrollable result/code previews using `white-space: pre`).

### Build/postprocessing pipeline (`scripts/`)

`npm run build` chains several codegen passes that rewrite the checked-in HTML in place:

1. `apply-env.js` — reads `.env`, rewrites the site base URL across `index.html`/`robots.txt`/`sitemap.xml`, inserts/removes the AdSense auto-ads `<script>` (between `ADSENSE_AUTO_ADS_START/END` markers) across all HTML files, and writes/deletes `ads.txt`.
2. `apply-guides.js` — loads `pageTranslations` out of `i18n.js` (via a sandboxed `vm` context simulating `window`/`document`) and injects a localized "usage guide" content block between `TOOL_GUIDE_START/END` markers on each tool page.
3. `apply-seo.js` — owns a `pages` array (title/description/url/type/category/priority/changefreq per page) and injects per-page canonical URL, OG/Twitter meta, verification meta, and JSON-LD structured data (including breadcrumbs, via `breadcrumbFor()`) between `SEO_META_START/END` / `STRUCTURED_DATA_START/END` markers. Also drives `sitemap.xml` generation.
4. `check-links.js` / `check-i18n-coverage.js` / `smoke-format-utils.js` — validation passes described above; the i18n checker maintains an `ignoredText` allowlist for brand names/acronyms/tokens that don't need translation.

Because these scripts mutate committed HTML files, always run `npm run build` after editing `.env`, `i18n.js` `pageTranslations`, or `apply-seo.js`'s `pages` array, and commit the resulting diffs.

## Adding a new tool

1. Create `tools/<category>/<tool-name>/index.html` (+ `tool.js` if needed) using the shared shell/script order above.
2. Add a card to the category `index.html` and (if relevant) the home page.
3. Add every visible string to `i18n.js`: `textTranslations` (with all 4 languages — English-source pages still need a `ko` entry so `?locale=ko` doesn't show English fallback), `attributeTranslations` for placeholders/aria-label/title, and `pageTranslations` with the exact deployed URL.
4. Add an entry to `apply-seo.js`'s `pages` array (title/description/url/type/category/priority/changefreq); add a new breadcrumb case in `breadcrumbFor()` if it's a new top-level category.
5. If it's a new top-level category, also update `assets/js/site-shell.js` (nav items) and `assets/js/recent-tools.js`.
6. Prefer live/reactive updates (input/change events) over an explicit "convert"/"format"/"run" button when it's safe to do so. Include a "test example" button that auto-fills sample content, localized per current language.
7. Data-format tools should process entirely in-browser (never send input to a server) and attempt best-effort auto-repair of malformed input (unbalanced quotes/brackets/tags), surfacing what was repaired via the result/status area rather than silently mutating input.
8. Run `npm run build` and verify `?locale=ko|en|ja|zh` directly on the new URL before committing.
