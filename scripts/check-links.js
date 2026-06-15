const fs = require("fs");
const path = require("path");

const root = process.cwd();
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory() && ![".git", "node_modules"].includes(entry.name)) {
      walk(fullPath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
}

function targetExists(file, url) {
  const cleanUrl = url.split("#")[0].split("?")[0];
  if (!cleanUrl || cleanUrl.startsWith("http") || cleanUrl.startsWith("mailto:") || cleanUrl.startsWith("javascript:")) {
    return true;
  }

  let target = path.resolve(path.dirname(file), cleanUrl);
  if (cleanUrl.endsWith("/")) {
    target = path.join(target, "index.html");
  }

  return fs.existsSync(target);
}

walk(root);

const missing = [];
const attributePattern = /(?:href|src)="([^"]+)"/g;

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  let match;

  while ((match = attributePattern.exec(source))) {
    const url = match[1];
    if (!targetExists(file, url)) {
      missing.push(`${path.relative(root, file)} -> ${url}`);
    }
  }
}

if (missing.length > 0) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files; all local href/src targets exist.`);
