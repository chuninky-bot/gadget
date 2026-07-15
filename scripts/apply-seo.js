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
    description: "HEX, Base64, URL 인코딩, UTF-8, EUC-KR 값을 브라우저에서 읽을 수 있는 문자로 변환하는 무료 인코딩 도구입니다.",
    type: "SoftwareApplication",
    category: "Text Utility",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/converter/base64-encoding/index.html",
    url: "/tools/converter/base64-encoding/",
    title: "Base64 인코딩 변환기 - Web-Tool.Shop",
    description: "입력값을 여러 문자 인코딩 기준의 Base64와 바이트 값으로 변환하고, Base64 값이면 인코딩별 디코딩 결과를 함께 확인하는 무료 도구입니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
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
    title: "이모지 도구 - Web-Tool.Shop",
    description: "자주 쓰이는 이모지를 먼저 보고, 키워드로 필터링한 뒤 클릭해서 복사하는 무료 브라우저 도구입니다.",
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
    file: "tools/diff/compare/index.html",
    url: "/tools/diff/compare/",
    title: "DIFF 도구 - Web-Tool.Shop",
    description: "텍스트, JSON, XML 두 값을 compare diff 방식으로 비교하고 추가, 삭제, 변경 라인을 확인하는 무료 DIFF 도구입니다.",
    type: "SoftwareApplication",
    category: "DeveloperApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/index.html",
    url: "/tools/design/",
    title: "디자인 도구 - Web-Tool.Shop",
    description: "이미지 필터, CSS 효과, 색상, SVG 생성을 위한 무료 브라우저 디자인 도구 모음입니다.",
    type: "CollectionPage",
    category: "DesignApplication",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/design/pixelate/index.html",
    url: "/tools/design/pixelate/",
    title: "이미지 픽셀화 필터 - Web-Tool.Shop",
    description: "이미지를 업로드해 레트로 8비트 게임 스타일의 픽셀 아트 이미지로 변환합니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/box-shadow/index.html",
    url: "/tools/design/box-shadow/",
    title: "Box-Shadow 생성기 - Web-Tool.Shop",
    description: "X축, Y축, 블러, 퍼짐, 투명도를 조절하고 순수 CSS box-shadow 코드를 복사합니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/glassmorphism/index.html",
    url: "/tools/design/glassmorphism/",
    title: "글래스모피즘 생성기 - Web-Tool.Shop",
    description: "블러와 투명도를 조절해 반투명 유리 질감 UI CSS를 생성합니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/button-badge/index.html",
    url: "/tools/design/button-badge/",
    title: "버튼 & 뱃지 메이커 - Web-Tool.Shop",
    description: "텍스트, 색상, 둥글기를 조절해 버튼이나 README 뱃지용 SVG 코드를 만듭니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/palette-extractor/index.html",
    url: "/tools/design/palette-extractor/",
    title: "이미지 주요 색상 추출기 - Web-Tool.Shop",
    description: "이미지에서 가장 많이 쓰인 핵심 색상 5가지를 HEX 팔레트로 추출합니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/svg-placeholder/index.html",
    url: "/tools/design/svg-placeholder/",
    title: "SVG 플레이스홀더 생성기 - Web-Tool.Shop",
    description: "가로, 세로, 텍스트를 입력해 웹 개발용 임시 SVG 플레이스홀더 이미지를 생성합니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/gradient-generator/index.html",
    url: "/tools/design/gradient-generator/",
    title: "그라디언트 생성기 - Web-Tool.Shop",
    description: "두 가지 색상과 각도를 조절해 배경용 CSS linear-gradient 코드를 만듭니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/design/color-converter/index.html",
    url: "/tools/design/color-converter/",
    title: "색상 코드 변환기 - Web-Tool.Shop",
    description: "HEX 색상 코드를 RGB와 HSL 값으로 변환하고 색상 미리보기를 보여줍니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "tools/css-art/index.html",
    url: "/tools/css-art/",
    title: "CSS-ART - Web-Tool.Shop",
    description: "빛나는 테두리, 일렁이는 배경, 불투명 유리 같은 복사 가능한 CSS 효과 아카이브입니다.",
    type: "CollectionPage",
    category: "DesignApplication",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    file: "tools/css-art/art-gallery/index.html",
    url: "/tools/css-art/art-gallery/",
    title: "CSS ART 아카이브 - Web-Tool.Shop",
    description: "빛나는 테두리, 일렁이는 배경, 불투명 유리 등 실시간 미리보기가 있는 CSS 아트 효과 코드 조각입니다.",
    type: "SoftwareApplication",
    category: "DesignApplication",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    file: "guides/index.html",
    url: "/guides/",
    title: "가이드 - Web-Tool.Shop",
    description: "JSON, 인코딩, SQL, CSV, UUID 같은 개발과 문서 작업의 기본 개념을 설명하는 무료 가이드 모음입니다.",
    type: "CollectionPage",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    file: "guides/what-is-json/index.html",
    url: "/guides/what-is-json/",
    title: "JSON이란 무엇인가 - Web-Tool.Shop",
    description: "JSON의 기본 구조와 자주 발생하는 문법 오류, JSON 포맷터로 빠르게 확인하는 방법을 설명합니다.",
    type: "Article",
    priority: "0.6",
    changefreq: "yearly",
  },
  {
    file: "guides/utf8-euckr-encoding/index.html",
    url: "/guides/utf8-euckr-encoding/",
    title: "UTF-8과 EUC-KR, 한글이 깨지는 이유 - Web-Tool.Shop",
    description: "문자 인코딩이 무엇인지, UTF-8과 EUC-KR의 차이, 한글이 깨져 보일 때 인코딩 변환 도구로 원인을 찾는 방법을 설명합니다.",
    type: "Article",
    priority: "0.6",
    changefreq: "yearly",
  },
  {
    file: "guides/sql-formatting-tips/index.html",
    url: "/guides/sql-formatting-tips/",
    title: "SQL을 보기 좋게 정리해야 하는 이유 - Web-Tool.Shop",
    description: "압축된 SQL 쿼리가 읽기 어려운 이유와 키워드 대문자화, 줄바꿈 정리가 코드 리뷰에 도움이 되는 이유를 설명합니다.",
    type: "Article",
    priority: "0.6",
    changefreq: "yearly",
  },
  {
    file: "guides/csv-tsv-excel-guide/index.html",
    url: "/guides/csv-tsv-excel-guide/",
    title: "CSV·TSV와 엑셀 호환 데이터 정리하기 - Web-Tool.Shop",
    description: "CSV와 TSV의 차이, 따옴표와 구분자 때문에 데이터가 깨지는 이유, 엑셀에 붙여넣기 전에 확인해야 할 점을 설명합니다.",
    type: "Article",
    priority: "0.6",
    changefreq: "yearly",
  },
  {
    file: "guides/what-is-uuid/index.html",
    url: "/guides/what-is-uuid/",
    title: "UUID란 무엇이고 왜 필요한가 - Web-Tool.Shop",
    description: "UUID가 무엇인지, 자동 증가 ID 대신 UUID를 쓰는 이유, UUID v4가 무작위로 생성되는 원리를 설명합니다.",
    type: "Article",
    priority: "0.6",
    changefreq: "yearly",
  },
  {
    file: "about.html",
    url: "/about.html",
    title: "Web-Tool.Shop 소개",
    description: "Web-Tool.Shop의 운영 방향과 브라우저 기반 웹 유틸리티 제공 원칙을 안내합니다.",
    type: "AboutPage",
    priority: "0.4",
    changefreq: "yearly",
  },
  {
    file: "contact.html",
    url: "/contact.html",
    title: "문의하기 - Web-Tool.Shop",
    description: "Web-Tool.Shop 오류 제보, 기능 제안, 개인정보 문의를 보낼 수 있는 연락처 안내입니다.",
    type: "ContactPage",
    priority: "0.4",
    changefreq: "yearly",
  },
  {
    file: "privacy.html",
    url: "/privacy.html",
    title: "개인정보처리방침 안내 - Web-Tool.Shop",
    description: "Web-Tool.Shop의 브라우저 기반 도구, 광고, 쿠키, 문의 처리와 관련된 개인정보처리방침입니다.",
    type: "WebPage",
    priority: "0.3",
    changefreq: "yearly",
  },
];

const pageByFile = new Map(pages.map((page) => [page.file.replace(/\\/g, "/"), page]));
const today = new Date().toISOString().slice(0, 10);
const buildDate = new Date();

function absoluteUrl(url) {
  return `${baseUrl}${url}`;
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
  if (page.url.startsWith("/guides/") && page.url !== "/guides/") parts.push({ name: "가이드", item: absoluteUrl("/guides/") });
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
    `    <link rel="alternate" type="application/rss+xml" title="${siteName} RSS" href="${absoluteUrl("/rss.xml")}">`,
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
  if (naverVerification) lines.push(`    <meta name="naver-site-verification" content="${escapeHtml(naverVerification)}" />`);
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
  html = html.replace(/<html lang="[^"]*">/i, '<html lang="ko">');
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

const rssItems = pages
  .filter((page) => page.url !== "/privacy.html")
  .map((page) => [
    '    <item>',
    `      <title>${escapeXml(page.title)}</title>`,
    `      <link>${absoluteUrl(page.url)}</link>`,
    `      <guid isPermaLink="true">${absoluteUrl(page.url)}</guid>`,
    `      <description>${escapeXml(page.description)}</description>`,
    `      <pubDate>${buildDate.toUTCString()}</pubDate>`,
    '    </item>',
  ].join('\n'));

const rss = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0">',
  '  <channel>',
  `    <title>${escapeXml(siteName)}</title>`,
  `    <link>${baseUrl}/</link>`,
  `    <description>${escapeXml("Web-Tool.Shop의 브라우저 기반 무료 웹 유틸리티 업데이트 피드입니다.")}</description>`,
  '    <language>ko-KR</language>',
  `    <lastBuildDate>${buildDate.toUTCString()}</lastBuildDate>`,
  ...rssItems,
  '  </channel>',
  '</rss>',
  '',
].join('\n');
fs.writeFileSync(path.join(root, "rss.xml"), rss);

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
  `Sitemap: ${baseUrl}/rss.xml`,
  '',
].join('\n');
fs.writeFileSync(path.join(root, "robots.txt"), robots);

console.log(`Applied SEO metadata for ${pages.length} pages.`);
