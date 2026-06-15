const fs = require("fs");
const path = require("path");

const root = process.cwd();
const envPath = path.join(root, ".env");

function readEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};

  return fs.readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .reduce((env, line) => {
      const index = line.indexOf("=");
      if (index < 0) return env;
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
      env[key] = value;
      return env;
    }, {});
}

const env = readEnv(envPath);
const githubUsername = env.GITHUB_USERNAME || "YOUR_GITHUB_USERNAME";
const repositoryName = env.GITHUB_REPOSITORY_NAME || "gadget";
const baseUrl = `https://${githubUsername}.github.io/${repositoryName}`;

const targets = ["index.html", "robots.txt", "sitemap.xml"];
const githubPagesUrlPattern = /https:\/\/[A-Za-z0-9_.-]+\.github\.io\/[A-Za-z0-9_.-]+/g;

for (const target of targets) {
  const filePath = path.join(root, target);
  let source = fs.readFileSync(filePath, "utf8");
  source = source.replace(githubPagesUrlPattern, baseUrl);
  fs.writeFileSync(filePath, source);
}

console.log(`Applied GitHub Pages URL: ${baseUrl}`);