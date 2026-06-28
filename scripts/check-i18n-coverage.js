const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.cwd();
const requiredLanguages = ["ko", "en", "ja", "zh"];
const ignoreDirectories = new Set([".git", "node_modules", "dist", "build", ".next", "coverage"]);
const ignoredText = new Set([
  "",
  "Web-Tool.Shop",
  "CSS-ART",
  "JSON",
  "XML",
  "SQL",
  "CSV",
  "TSV",
  "UUID",
  "HEX",
  "RGB",
  "HSL",
  "URL",
  "UTF-8",
  "EUC-KR",
  "Base64",
  "TEXT2ART",
  "IMAGE2ART",
  "Photo",
  "Binary",
  "Aa",
  "{ }",
  "Δ",
  "X",
  "Y",
]);

function walkHtmlFiles(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoreDirectories.has(entry.name)) walkHtmlFiles(path.join(directory, entry.name), files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(path.join(directory, entry.name));
  }
  return files;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function loadTranslations() {
  const code = `${fs.readFileSync(path.join(root, "assets", "js", "i18n.js"), "utf8")}
globalThis.__i18n = { textTranslations, attributeTranslations, pageTranslations };`;
  const noop = () => {};
  const fakeDocument = {
    body: {},
    documentElement: {},
    readyState: "complete",
    addEventListener: noop,
    createElement: () => ({
      append: noop,
      setAttribute: noop,
      className: "",
      dataset: {},
      replaceChildren: noop,
    }),
    createTreeWalker: () => ({ nextNode: () => false }),
    querySelector: () => null,
    querySelectorAll: () => [],
  };
  const context = {
    console,
    CustomEvent: function CustomEvent() {},
    NodeFilter: { SHOW_TEXT: 4, FILTER_ACCEPT: 1, FILTER_REJECT: 2 },
    URL,
    URLSearchParams,
    document: fakeDocument,
    localStorage: { getItem: () => null, setItem: noop },
    navigator: { language: "ko-KR" },
    window: {
      location: { pathname: "/", search: "", href: "https://web-tool.shop/" },
      history: { replaceState: noop },
      dispatchEvent: noop,
      addEventListener: noop,
    },
  };
  context.window.document = fakeDocument;
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(code, context, { filename: "i18n.js" });
  return context.__i18n;
}

function hasAllLanguages(entry) {
  return requiredLanguages.every((language) => typeof entry?.[language] === "string" && entry[language].trim());
}

function isIgnorableText(text) {
  if (ignoredText.has(text)) return true;
  if (/\bselect\b.+\bfrom\b/i.test(text)) return true;
  if (/%[0-9a-f]{2}/i.test(text)) return true;
  if (/^[\d\s.,:#%()+\-/*&]+$/.test(text)) return true;
  if (/^#[0-9a-f]{3,8}$/i.test(text)) return true;
  if (/^[A-Z0-9 _./&+-]{1,20}$/.test(text)) return true;
  if (/^[{}()[\]<>/|\\:;.,!?'"`~+=_-]+$/.test(text)) return true;
  return false;
}

function textCandidates(html) {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "";
  const stripped = body
    .replace(/<!-- TOOL_GUIDE_START -->[\s\S]*?<!-- TOOL_GUIDE_END -->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/?[a-zA-Z][^>]*>/g, "\n");
  return stripped
    .split(/\n+/)
    .map((text) => decodeHtml(text).replace(/\s+/g, " ").trim())
    .filter((text) => text && !isIgnorableText(text));
}

function attributeCandidates(html) {
  const values = [];
  const attrPattern = /\s(?:placeholder|aria-label|title)="([^"]+)"/gi;
  let match;
  while ((match = attrPattern.exec(html))) {
    const text = decodeHtml(match[1]).replace(/\s+/g, " ").trim();
    if (text && !isIgnorableText(text)) values.push(text);
  }
  return values;
}

function main() {
  const { textTranslations, attributeTranslations } = loadTranslations();
  const missing = [];
  const incomplete = [];

  for (const file of walkHtmlFiles(root)) {
    const relative = path.relative(root, file).replace(/\\/g, "/");
    const html = fs.readFileSync(file, "utf8");

    for (const text of textCandidates(html)) {
      const entry = textTranslations[text];
      if (!entry) missing.push(`${relative}: text "${text}"`);
      else if (!hasAllLanguages({ ko: text, ...entry })) incomplete.push(`${relative}: text "${text}"`);
    }

    for (const text of attributeCandidates(html)) {
      const entry = attributeTranslations[text] || textTranslations[text];
      if (!entry) missing.push(`${relative}: attribute "${text}"`);
      else if (!hasAllLanguages({ ko: text, ...entry })) incomplete.push(`${relative}: attribute "${text}"`);
    }
  }

  if (missing.length || incomplete.length) {
    if (missing.length) {
      console.error("Missing i18n entries:");
      missing.forEach((line) => console.error(`- ${line}`));
    }
    if (incomplete.length) {
      console.error("Incomplete i18n entries:");
      incomplete.forEach((line) => console.error(`- ${line}`));
    }
    process.exit(1);
  }

  console.log("i18n coverage check passed.");
}

main();
