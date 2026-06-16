# AI Coding Rules

This file is for AI/code-generation agents working on Web-Tool.Shop. User-facing project documentation stays in `README.md`; implementation rules for future coding work belong here.

## Shared Shell

- Do not hand-maintain duplicated header or footer markup page by page.
- Every HTML page must load `assets/js/site-shell.js` before `assets/js/i18n.js`.
- `site-shell.js` owns the global header navigation and footer.
- `site-shell.js` must install the header before `i18n.js` injects the language selector.
- The language selector is owned by `assets/js/i18n.js`; keep it in the shared header and sync it with the `locale` query parameter.
- When adding a top-level category, update `assets/js/site-shell.js` first.
- Do not fix only one page's nav when a global menu changes.

Expected script order:

```html
<script defer src="../../../assets/js/site-shell.js"></script>
<script defer src="../../../assets/js/i18n.js"></script>
<script defer src="./tool.js"></script>
<script defer src="../../../assets/js/recent-tools.js"></script>
```

Pages without a local `tool.js` still load `site-shell.js` before `i18n.js` and `recent-tools.js`.

## Internationalization

- All user-visible fixed text must be represented in `assets/js/i18n.js`.
- This includes headings, card titles, descriptions, breadcrumbs, labels, placeholders, button titles, status messages, generated JS text, and category/tool index copy.
- English-source pages must still provide a Korean `ko` translation entry so `?locale=ko` does not leave English fallback text visible.
- Add new page URLs to `pageTranslations`; otherwise `?locale=en` can fall back to home metadata.
- Add placeholders, `aria-label`, and `title` strings to `attributeTranslations`.
- Dynamic JS messages must use `window.gadgetTranslate()` or a local `message()` wrapper.
- The emoji tool uses generated Unicode data from `assets/js/emoji-data.js`; regenerate it with `npm run generate:emoji` when updating emoji coverage or multilingual search keywords.
- Verify direct locale URLs for new pages:
  - `?locale=ko`
  - `?locale=en`
  - `?locale=ja`
  - `?locale=zh`
- Never commit mojibake or placeholder corruption such as `???`.

## New Pages

When adding a new tool or category:

- Add the page under `tools/category/tool-name/`.
- Add or update the category index card.
- Add or update the home page card/search entry when appropriate.
- Add the page to `scripts/apply-seo.js`.
- If it is a new top-level category, update:
  - `assets/js/site-shell.js`
  - `assets/js/recent-tools.js`
  - `scripts/apply-seo.js` breadcrumb handling
  - `assets/js/i18n.js`
- Run `npm run build` before committing.

## Copy UI

- Do not add standalone visible copy buttons inside action rows for new text/result surfaces.
- Textareas, result panels, and generated code blocks should rely on the shared copy icon behavior from `assets/js/recent-tools.js`.
- Copy feedback should use the shared toast, not per-tool alert dialogs.
- Prefer live conversion on input/change events. Avoid primary "generate", "convert", "format", or "run" buttons when the result can update safely in real time.
- Scrollable result previews must use the shared simple scrollbar styling. ASCII/preformatted previews should keep `white-space: pre` and use horizontal scrolling instead of wrapping long lines.

## Styling

- Edit `assets/less/styles.less`, then run `npm run build` to regenerate `assets/css/styles.css`.
- Keep controls mobile responsive.
- Prefer existing classes such as `tool-shell`, `tool-grid`, `tool-input`, `tool-textarea`, `result-panel`, and `form-grid`.

## Verification

Use port `3001` for agent-run local browser checks. Keep port `3000` available for the user to run and inspect the site manually.

Recommended local test server:

```bash
npx browser-sync start --server . --files "*.html,tools/**/*.html,tools/**/*.js,assets/css/*.css,assets/js/*.js" --port 3001 --no-open
```

Minimum checks before commit:

```bash
npm run build
node --check assets/js/i18n.js
node --check assets/js/site-shell.js
```

For changed tool scripts, also run `node --check` on each touched `tool.js`.
