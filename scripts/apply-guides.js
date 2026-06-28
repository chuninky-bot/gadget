const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.cwd();
const startMarker = "<!-- TOOL_GUIDE_START -->";
const endMarker = "<!-- TOOL_GUIDE_END -->";
const languages = ["ko", "en", "ja", "zh"];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function plainTitle(title) {
  return title.replace(/\s+-\s+Web-Tool\.Shop$/, "");
}

function fileForUrl(url) {
  return path.join(root, url.replace(/^\/+/, ""), "index.html");
}

function loadPageTranslations() {
  const i18nPath = path.join(root, "assets", "js", "i18n.js");
  const code = `${fs.readFileSync(i18nPath, "utf8")}
globalThis.__pageTranslations = pageTranslations;`;
  const noop = () => {};
  const fakeDocument = {
    body: {},
    documentElement: {},
    addEventListener: noop,
    createElement: () => ({
      append: noop,
      setAttribute: noop,
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
  return context.__pageTranslations;
}

const copy = {
  eyebrow: {
    ko: "사용 가이드",
    en: "Usage guide",
    ja: "使い方ガイド",
    zh: "使用指南",
  },
  guideTitle: {
    ko: (title) => `${title} 사용 가이드`,
    en: (title) => `How to use ${title}`,
    ja: (title) => `${title}の使い方`,
    zh: (title) => `${title}使用指南`,
  },
  intro: {
    ko: (title, description) => `${title}는 ${description} 모든 처리는 사용자의 브라우저 안에서 이루어지므로 별도 설치 없이 필요한 작업을 빠르게 확인할 수 있습니다.`,
    en: (title, description) => `${title} helps with this task: ${description} Everything runs in your browser, so you can work quickly without installing extra software.`,
    ja: (title, description) => `${title}は次の作業に役立ちます。${description} すべてブラウザー内で処理されるため、追加インストールなしで素早く確認できます。`,
    zh: (title, description) => `${title} 可用于以下任务：${description} 所有处理都在浏览器中完成，无需额外安装即可快速检查结果。`,
  },
  sections: [
    {
      heading: {
        ko: "언제 사용하면 좋나요?",
        en: "When should I use it?",
        ja: "いつ使うと便利ですか？",
        zh: "什么时候适合使用？",
      },
      body: {
        ko: (title) => `${title}는 짧은 확인부터 반복적인 정리 작업까지 빠르게 처리하고 싶을 때 유용합니다. 결과를 바로 복사하거나 다른 문서, 코드, 디자인 작업에 이어서 사용할 수 있습니다.`,
        en: (title) => `${title} is useful for quick checks and repeated cleanup work. You can copy the result immediately and continue in a document, code editor, or design workflow.`,
        ja: (title) => `${title}は、短い確認から繰り返しの整理作業まで素早く処理したいときに便利です。結果をすぐコピーして、文書、コード、デザイン作業に続けて使えます。`,
        zh: (title) => `${title} 适合快速检查和反复整理任务。你可以立即复制结果，并继续用于文档、代码或设计流程。`,
      },
    },
    {
      heading: {
        ko: "기본 사용 순서",
        en: "Basic workflow",
        ja: "基本的な流れ",
        zh: "基本流程",
      },
      steps: {
        ko: ["상단의 입력란, 옵션, 업로드 영역에 필요한 값을 넣습니다.", "결과 영역이 자동으로 갱신되는지 확인합니다.", "결과 박스나 생성된 항목의 복사 아이콘을 사용해 필요한 값을 가져갑니다."],
        en: ["Enter values in the input, option, or upload area at the top.", "Check that the result area updates automatically.", "Use the copy icon on the result box or generated item to take the value you need."],
        ja: ["上部の入力欄、オプション、アップロード領域に必要な値を入れます。", "結果エリアが自動で更新されることを確認します。", "結果ボックスや生成された項目のコピーアイコンから必要な値をコピーします。"],
        zh: ["在顶部输入框、选项或上传区域中填写需要的值。", "确认结果区域会自动更新。", "使用结果框或生成项目上的复制图标获取需要的值。"],
      },
    },
    {
      heading: {
        ko: "활용 팁",
        en: "Practical tips",
        ja: "活用のコツ",
        zh: "实用技巧",
      },
      body: {
        ko: "결과가 길거나 줄바꿈이 많은 경우 결과 박스 안에서 가로 또는 세로 스크롤로 확인할 수 있습니다. 자주 쓰는 도구는 별표로 즐겨찾기에 추가해 다음 작업에서 바로 열 수 있습니다.",
        en: "If the result is long or has many line breaks, review it with horizontal or vertical scrolling inside the result box. Add frequently used tools to favorites with the star button so you can reopen them quickly.",
        ja: "結果が長い場合や改行が多い場合は、結果ボックス内の横スクロールまたは縦スクロールで確認できます。よく使うツールは星ボタンでお気に入りに追加すると、次回すぐに開けます。",
        zh: "如果结果较长或包含多行，可在结果框内通过横向或纵向滚动查看。常用工具可用星标加入收藏，方便下次快速打开。",
      },
    },
    {
      heading: {
        ko: "데이터 처리와 주의사항",
        en: "Data handling and cautions",
        ja: "データ処理と注意点",
        zh: "数据处理和注意事项",
      },
      body: {
        ko: "이 도구는 입력한 내용을 서버로 전송하지 않는 브라우저 기반 유틸리티입니다. 다만 중요한 설정값, 개인정보, 배포용 코드는 복사하기 전에 결과가 의도와 일치하는지 한 번 더 확인하세요.",
        en: "This is a browser-based utility and does not send your input to a server. Still, for important settings, personal data, or production code, review the result before copying or saving it.",
        ja: "このツールはブラウザー上で動作し、入力内容をサーバーへ送信しません。ただし重要な設定値、個人情報、本番用コードは、コピーや保存の前に結果が意図どおりか確認してください。",
        zh: "此工具在浏览器中运行，不会把输入内容发送到服务器。不过，对于重要设置、个人数据或生产代码，请在复制或保存前再次确认结果是否符合预期。",
      },
    },
  ],
};

function localizedAttrs(values) {
  return languages.map((language) => `data-guide-${language}="${escapeHtml(values[language])}"`).join(" ");
}

function translatable(tag, values, attributes = "") {
  return `<${tag} data-guide-i18n ${localizedAttrs(values)}${attributes ? ` ${attributes}` : ""}>${escapeHtml(values.ko)}</${tag}>`;
}

function renderGuide(url, page) {
  const title = {};
  const description = {};
  const guideTitle = {};
  const intro = {};
  for (const language of languages) {
    title[language] = plainTitle(page.title[language] || page.title.ko);
    description[language] = page.description[language] || page.description.ko;
    guideTitle[language] = copy.guideTitle[language](title[language]);
    intro[language] = copy.intro[language](title[language], description[language]);
  }

  const id = `guide-${url.replace(/^\/|\/$/g, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  const articles = copy.sections.map((section) => {
    const heading = section.heading;
    const body = languages.reduce((values, language) => {
      const bodyText = section.body?.[language];
      values[language] = typeof bodyText === "function" ? bodyText(title[language]) : bodyText || "";
      return values;
    }, {});
    const steps = section.steps ? languages.reduce((values, language) => {
      values[language] = section.steps[language];
      return values;
    }, {}) : null;

    const content = steps
      ? `<ol>${steps.ko.map((_, index) => {
        const item = {};
        for (const language of languages) item[language] = steps[language][index];
        return translatable("li", item);
      }).join("")}</ol>`
      : translatable("p", body);

    return `<article>${translatable("h3", heading)}${content}</article>`;
  }).join("");

  return [
    startMarker,
    `      <section class="tool-guide" aria-labelledby="${id}">`,
    "        <div class=\"guide-heading\">",
    `          ${translatable("p", copy.eyebrow, "class=\"eyebrow\"")}`,
    `          ${translatable("h2", guideTitle, `id="${id}"`)}`,
    `          ${translatable("p", intro)}`,
    "        </div>",
    `        <div class="guide-grid">${articles}</div>`,
    "      </section>",
    endMarker,
  ].join("\n");
}

function stripExistingGuide(html) {
  return html
    .replace(new RegExp(`\\s*${startMarker}[\\s\\S]*?${endMarker}`, "g"), "")
    .replace(/\s*<section class="tool-guide"[\s\S]*?<\/section>\s*(?=<aside class="ad-slot")/g, "");
}

function insertGuide(html, guide) {
  if (!/<aside class="ad-slot"/.test(html)) return html;
  return html.replace(/\s*(<aside class="ad-slot")/, `\n${guide}\n      $1`);
}

function main() {
  const pageTranslations = loadPageTranslations();
  let count = 0;

  for (const [url, page] of Object.entries(pageTranslations)) {
    if (!url.startsWith("/tools/")) continue;
    const filePath = fileForUrl(url);
    if (!fs.existsSync(filePath)) continue;
    const guide = renderGuide(url, page);
    const original = fs.readFileSync(filePath, "utf8");
    const next = insertGuide(stripExistingGuide(original), guide);
    if (next !== original) {
      fs.writeFileSync(filePath, next);
      count += 1;
    }
  }

  console.log(`Applied tool guides for ${count} pages.`);
}

main();
