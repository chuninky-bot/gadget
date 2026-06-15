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

function normalizeBaseUrl(value) {
  return value.replace(/\/+$/, "");
}

const env = readEnv(envPath);
const githubUsername = env.GITHUB_USERNAME || "YOUR_GITHUB_USERNAME";
const repositoryName = env.GITHUB_REPOSITORY_NAME || "gadget";
const baseUrl = normalizeBaseUrl(env.SITE_URL || `https://${githubUsername}.github.io/${repositoryName}`);
const adsenseClient = env.ADSENSE_CLIENT || "";
const adsensePublisherId = env.ADSENSE_PUBLISHER_ID || "";

const urlTargets = ["index.html", "robots.txt", "sitemap.xml"];
const siteUrlPattern = /https:\/\/(?:[A-Za-z0-9_.-]+\.github\.io\/[A-Za-z0-9_.-]+|web-tool\.shop)/g;

for (const target of urlTargets) {
  const filePath = path.join(root, target);
  let source = fs.readFileSync(filePath, "utf8");
  source = source.replace(siteUrlPattern, baseUrl);
  source = source.replace(/web-tool\.shopADSENSE_CLIENT=/g, "web-tool.shop");
  fs.writeFileSync(filePath, source);
}

const htmlFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(fullPath);
  }
}

function applyAutoAds(source) {
  source = source.replace(/\n?\s*<!-- ADSENSE_AUTO_ADS_START -->[\s\S]*?<!-- ADSENSE_AUTO_ADS_END -->/g, "");
  if (!adsenseClient) return source;

  const snippet = `
    <!-- ADSENSE_AUTO_ADS_START -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}" crossorigin="anonymous"></script>
    <!-- ADSENSE_AUTO_ADS_END -->`;
  return source.replace(/\s*<\/head>/, `${snippet}\n  </head>`);
}

walk(root);
for (const filePath of htmlFiles) {
  const source = fs.readFileSync(filePath, "utf8");
  fs.writeFileSync(filePath, applyAutoAds(source));
}

const adsTxtPath = path.join(root, "ads.txt");
if (adsensePublisherId) {
  fs.writeFileSync(adsTxtPath, `google.com, ${adsensePublisherId}, DIRECT, f08c47fec0942fa0\n`);
} else if (fs.existsSync(adsTxtPath)) {
  fs.unlinkSync(adsTxtPath);
}

console.log(`Applied site URL: ${baseUrl}`);
console.log(adsenseClient ? `Applied AdSense client: ${adsenseClient}` : "AdSense client not set; skipped auto ads.");
console.log(adsensePublisherId ? "Generated ads.txt." : "AdSense publisher ID not set; skipped ads.txt.");