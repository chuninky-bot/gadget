const fs = require("fs");
const path = require("path");

const root = process.cwd();
const siteName = "Web-Tool.Shop";
const defaultLocale = "ko-KR";
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
      env[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
      return env;
    }, {});
}

function normalizeBaseUrl(value) {
  return value.replace(/\/+$/, "");
}

const env = readEnv(envPath);
const baseUrl = normalizeBaseUrl(env.SITE_URL || "https://web-tool.shop");
const googleVerification = env.GOOGLE_SITE_VERIFICATION || "";
const naverVerification = env.NAVER_SITE_VERIFICATION || "";

const pages = [
  {
    file: "index.html",
    url: "/",
    title: "Web-Tool.Shop - 무료 웹 유틸리티 모음",
    description: "설치 없이 브라우저에서 바로 쓰는 무료 웹 유틸리티 모음입니다. JSON, XML, SQL, CSV, UUID, 글자 수 도구를 빠르게 사용하세요.",
    type: "WebSite",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    file: "tools/text/index.html",
    url: "/tools/text/",
    title: "텍스트 도구 - Web-Tool.Shop",
    description: "글자 수 세기처럼 문서와 텍스트를 빠르게 확인하고 정리하는 무료 브라우저 도구 모음입니다.",
    type: "CollectionPage",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/text/word-counter/index.html",
    url: "/tools/text/word-counter/",
    title: "글자 수 세기 - Web-Tool.Shop",
    description: "텍스트의 문자 수, 공백 제외 문자 수, 단어 수, 줄 수를 브라우저에서 즉시 계산하는 무료 글자 수 세기 도구입니다.",
    type: "SoftwareApplication",
    category: "Text Utility",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/text/ascii-art/index.html",
    url: "/tools/text/ascii-art/",
    title: "ASCII ART 변환기 - Web-Tool.Shop",
    description: "텍스트를 ASCII 배너로 변환하거나 이미지를 ASCII 문자 아트로 바꾸는 무료 브라우저 도구입니다.",
    type: "SoftwareApplication",
    category: "Text Utility",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/text/encoding-converter/index.html",
    url: "/tools/text/encoding-converter/",
    title: "인코딩 변환 도구 - Web-Tool.Shop",
    description: "텍스트를 UTF-8, HEX, Base64, URL 인코딩, Unicode 코드 포인트 등 여러 표현으로 한 번에 변환하는 무료 브라우저 도구입니다.",
    type: "SoftwareApplication",
    category: "Text Utility",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/text/url-encoder/index.html",
    url: "/tools/text/url-encoder/",
    title: "URL 인코딩 변환기 - Web-Tool.Shop",
    description: "일반 텍스트와 URL 인코딩 문자열을 브라우저에서 서로 변환하는 무료 URL encode decode 도구입니다.",
    type: "SoftwareApplication",
    category: "Text Utility",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/text/emoji-tool/index.html",
    url: "/tools/text/emoji-tool/",
    title: "Design Tools - Web-Tool.Shop",
    description: "Browse popular emojis first, filter by keyword, and click any emoji to copy it.",
    type: "SoftwareApplication",
    category: "Text Utility",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/index.html",
    url: "/tools/converter/",
    title: "자료형 변환 - Web-Tool.Shop",
    description: "JSON, XML, SQL, CSV, UUID 데이터를 브라우저에서 정리하고 가능한 오류를 자동 복구하는 무료 자료형 변환 도구 모음입니다.",
    type: "CollectionPage",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/json-formatter/index.html",
    url: "/tools/converter/json-formatter/",
    title: "JSON 포맷터 - Web-Tool.Shop",
    description: "JSON 문자열을 보기 좋게 정리하고 누락된 따옴표, 중괄호, 대괄호, 후행 쉼표를 가능한 범위에서 자동 복구합니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/xml-formatter/index.html",
    url: "/tools/converter/xml-formatter/",
    title: "XML 포맷터 - Web-Tool.Shop",
    description: "XML을 보기 좋게 정리하고 누락된 닫는 태그, 속성 따옴표, 깨진 엔티티를 가능한 범위에서 자동 복구합니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/sql-formatter/index.html",
    url: "/tools/converter/sql-formatter/",
    title: "SQL 포맷터 - Web-Tool.Shop",
    description: "SQL 쿼리를 읽기 좋게 정리하고 누락된 따옴표, 괄호, 세미콜론을 가능한 범위에서 자동 보정합니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/excel-cleaner/index.html",
    url: "/tools/converter/excel-cleaner/",
    title: "Excel CSV 정리 도구 - Web-Tool.Shop",
    description: "Excel에 붙여넣기 좋은 CSV/TSV 데이터를 정리하고 깨진 따옴표와 행 길이를 보정하는 무료 브라우저 도구입니다.",
    type: "SoftwareApplication",
    category: "Spreadsheet Utility",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/uuid-generator/index.html",
    url: "/tools/converter/uuid-generator/",
    title: "UUID 생성기 - Web-Tool.Shop",
    description: "브라우저에서 UUID v4 값을 빠르게 생성하고 복사하는 무료 UUID 생성기입니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/diff/index.html",
    url: "/tools/diff/",
    title: "비교하기 - Web-Tool.Shop",
    description: "텍스트, JSON, XML 내용을 브라우저에서 나란히 비교하는 무료 DIFF 도구 모음입니다.",
    type: "CollectionPage",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/diff/compare/index.html",
    url: "/tools/diff/compare/",
    title: "DIFF 비교 도구 - Web-Tool.Shop",
    description: "텍스트, JSON, XML 두 값을 브라우저에서 비교하고 추가, 삭제, 변경 라인을 확인하는 무료 DIFF 도구입니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/index.html",
    url: "/tools/design/",
    title: "Design Tools - Web-Tool.Shop",
    description: "Browser tools for image filters, CSS effects, colors, and SVG generation.",
    type: "CollectionPage",
    category: "DesignApplication",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/design/pixelate/index.html",
    url: "/tools/design/pixelate/",
    title: "Image Pixelate Filter - Web-Tool.Shop",
    description: "Upload an image and turn it into a retro pixel-art style.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/box-shadow/index.html",
    url: "/tools/design/box-shadow/",
    title: "Box-Shadow Generator - Web-Tool.Shop",
    description: "Tune shadow values and copy pure CSS box-shadow code.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/glassmorphism/index.html",
    url: "/tools/design/glassmorphism/",
    title: "Glassmorphism Generator - Web-Tool.Shop",
    description: "Create translucent glass UI CSS with blur controls.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/button-badge/index.html",
    url: "/tools/design/button-badge/",
    title: "Button & Badge Maker - Web-Tool.Shop",
    description: "Create button or README badge SVG code.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/palette-extractor/index.html",
    url: "/tools/design/palette-extractor/",
    title: "Image Palette Extractor - Web-Tool.Shop",
    description: "Extract five dominant HEX colors from an image.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/svg-placeholder/index.html",
    url: "/tools/design/svg-placeholder/",
    title: "SVG Placeholder Generator - Web-Tool.Shop",
    description: "Generate temporary SVG placeholder images.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/gradient-generator/index.html",
    url: "/tools/design/gradient-generator/",
    title: "Gradient Generator - Web-Tool.Shop",
    description: "Create linear-gradient CSS from two colors and an angle.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/color-converter/index.html",
    url: "/tools/design/color-converter/",
    title: "Color Code Converter - Web-Tool.Shop",
    description: "Convert HEX colors into RGB and HSL.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/css-art/index.html",
    url: "/tools/css-art/",
    title: "CSS-ART - Web-Tool.Shop",
    description: "An archive of copyable CSS effects such as glowing borders, wavy backgrounds, and frosted glass.",
    type: "CollectionPage",
    category: "DesignApplication",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/css-art/art-gallery/index.html",
    url: "/tools/css-art/art-gallery/",
    title: "CSS ART Archive - Web-Tool.Shop",
    description: "Copyable CSS art effect snippets with live previews.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "privacy.html",
    url: "/privacy.html",
    title: "개인정보처리방침 - Web-Tool.Shop",
    description: "Web-Tool.Shop의 개인정보처리방침과 브라우저 기반 도구의 데이터 처리 방식을 안내합니다.",
    type: "WebPage",
    priority: "0.3",
    changefreq: "yearly",
  },
];

const pageByFile = new Map(pages.map((page) => [page.file.replace(/\\/g, "/"), page]));
const today = new Date().toISOString().slice(0, 10);

function absoluteUrl(url) {
  return `${baseUrl}${url}`;
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function stripManagedSeo(head) {
  return head
    .replace(/\s*<!-- SEO_META_START -->[\s\S]*?<!-- SEO_META_END -->/g, "")
    .replace(/\s*<!-- STRUCTURED_DATA_START -->[\s\S]*?<!-- STRUCTURED_DATA_END -->/g, "")
    .replace(/\s*<link rel="canonical"[^>]*>/gi, "")
    .replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, "")
    .replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, "")
    .replace(/\s*<meta name="robots"[^>]*>/gi, "")
    .replace(/\s*<meta name="google-site-verification"[^>]*>/gi, "")
    .replace(/\s*<meta name="naver-site-verification"[^>]*>/gi, "");
}

function breadcrumbFor(page) {
  if (page.url === "/") return null;
  const parts = [{ name: siteName, item: absoluteUrl("/") }];
  if (page.url.startsWith("/tools/text/")) parts.push({ name: "텍스트 도구", item: absoluteUrl("/tools/text/") });
  if (page.url.startsWith("/tools/converter/")) parts.push({ name: "자료형 변환", item: absoluteUrl("/tools/converter/") });
  if (page.url.startsWith("/tools/diff/")) parts.push({ name: "비교하기", item: absoluteUrl("/tools/diff/") });
  parts.push({ name: page.title.replace(` - ${siteName}`, ""), item: absoluteUrl(page.url) });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: part.name,
      item: part.item,
    })),
  };
}

function structuredDataFor(page) {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: baseUrl,
    },
  ];

  if (page.type === "SoftwareApplication") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: page.title.replace(` - ${siteName}`, ""),
      url: absoluteUrl(page.url),
      description: page.description,
      applicationCategory: page.category || "UtilitiesApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    });
  } else {
    graph.push({
      "@context": "https://schema.org",
      "@type": page.type,
      name: page.title,
      url: absoluteUrl(page.url),
      description: page.description,
      inLanguage: defaultLocale,
    });
  }

  const breadcrumb = breadcrumbFor(page);
  if (breadcrumb) graph.push(breadcrumb);
  return graph;
}

function seoMetaFor(page) {
  const lines = [
    "    <!-- SEO_META_START -->",
    `    <meta name="robots" content="index, follow">`,
    `    <link rel="canonical" href="${absoluteUrl(page.url)}">`,
    `    <meta property="og:site_name" content="${siteName}">`,
    `    <meta property="og:title" content="${escapeHtml(page.title)}">`,
    `    <meta property="og:description" content="${escapeHtml(page.description)}">`,
    `    <meta property="og:type" content="${page.url === "/" ? "website" : "article"}">`,
    `    <meta property="og:url" content="${absoluteUrl(page.url)}">`,
    `    <meta property="og:locale" content="${defaultLocale.replace("-", "_")}">`,
    `    <meta name="twitter:card" content="summary">`,
    `    <meta name="twitter:title" content="${escapeHtml(page.title)}">`,
    `    <meta name="twitter:description" content="${escapeHtml(page.description)}">`,
  ];
  if (googleVerification) lines.push(`    <meta name="google-site-verification" content="${escapeHtml(googleVerification)}">`);
  if (naverVerification) lines.push(`    <meta name="naver-site-verification" content="${escapeHtml(naverVerification)}">`);
  lines.push("    <!-- SEO_META_END -->");
  return lines.join("\n");
}

function structuredDataScript(page) {
  return [
    "    <!-- STRUCTURED_DATA_START -->",
    `    <script type="application/ld+json">${JSON.stringify(structuredDataFor(page))}</script>`,
    "    <!-- STRUCTURED_DATA_END -->",
  ].join("\n");
}

for (const page of pages) {
  const filePath = path.join(root, page.file);
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, "utf8");
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${escapeHtml(page.description)}">`);
  html = html.replace(/<head>([\s\S]*?)<\/head>/i, (_, head) => {
    const cleaned = stripManagedSeo(head);
    return `<head>${cleaned}\n${seoMetaFor(page)}\n${structuredDataScript(page)}\n  </head>`;
  });
  fs.writeFileSync(filePath, html);
}

const notFoundPath = path.join(root, "404.html");
if (fs.existsSync(notFoundPath)) {
  let html = fs.readFileSync(notFoundPath, "utf8");
  html = html.replace(/\s*<meta name="robots"[^>]*>/gi, "");
  html = html.replace(/<head>([\s\S]*?)<\/head>/i, (_, head) => `<head>${head}\n    <meta name="robots" content="noindex, follow">\n  </head>`);
  fs.writeFileSync(notFoundPath, html);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((page) => [
    '  <url>',
    `    <loc>${absoluteUrl(page.url)}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${page.changefreq}</changefreq>`,
    `    <priority>${page.priority}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  'User-agent: Googlebot',
  'Allow: /',
  '',
  'User-agent: Yeti',
  'Allow: /',
  '',
  `Sitemap: ${baseUrl}/sitemap.xml`,
  '',
].join('\n');
fs.writeFileSync(path.join(root, "robots.txt"), robots);

console.log(`Applied SEO metadata for ${pages.length} pages.`);
