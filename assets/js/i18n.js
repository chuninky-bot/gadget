const supportedLanguages = ["ko", "en", "ja", "zh"];
const languageNames = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
};

const textTranslations = {
  "주요 메뉴": { en: "Main menu", ja: "メインメニュー", zh: "主菜单" },
  "텍스트": { en: "Text", ja: "テキスト", zh: "文本" },
  "개발자": { en: "Developer", ja: "開発者", zh: "开发者" },
  "생성기": { en: "Generators", ja: "ジェネレーター", zh: "生成器" },
  "홈": { en: "Home", ja: "ホーム", zh: "首页" },
  "Browser-only utilities": { en: "Browser-only utilities", ja: "ブラウザーだけで使えるツール", zh: "仅浏览器工具" },
  "필요할 때 바로 여는 작은 웹 가젯 모음": { en: "Small web gadgets ready whenever you need them", ja: "必要なときにすぐ開ける小さなWebガジェット集", zh: "需要时即可打开的小型网页工具集" },
  "텍스트 정리, 개발자 작업, 랜덤 생성 같은 반복 작업을 설치 없이 빠르게 처리하세요.": { en: "Handle repetitive text cleanup, developer tasks, and random generation quickly without installing anything.", ja: "テキスト整理、開発作業、ランダム生成などの反復作業をインストール不要で素早く処理できます。", zh: "无需安装，即可快速处理文本整理、开发任务、随机生成等重复工作。" },
  "도구 검색": { en: "Search tools", ja: "ツール検索", zh: "搜索工具" },
  "Advertisement": { en: "Advertisement", ja: "広告", zh: "广告" },
  "카테고리": { en: "Categories", ja: "カテゴリー", zh: "分类" },
  "URL은 `tools/카테고리/도구이름/` 구조로 관리합니다.": { en: "URLs use the `tools/category/tool-name/` structure.", ja: "URLは `tools/category/tool-name/` 構造で管理します。", zh: "URL 使用 `tools/category/tool-name/` 结构管理。" },
  "텍스트 도구": { en: "Text tools", ja: "テキストツール", zh: "文本工具" },
  "글자 수 세기, 공백 정리, 대소문자 변환 등 문서 작업용 도구.": { en: "Tools for document work, including character counts, whitespace cleanup, and case conversion.", ja: "文字数カウント、空白整理、大文字小文字変換など、文書作業向けのツール。", zh: "用于文档工作的工具，包括字数统计、空白清理、大小写转换等。" },
  "개발자 도구": { en: "Developer tools", ja: "開発者ツール", zh: "开发者工具" },
  "JSON 포맷팅, 인코딩, 간단한 데이터 변환 작업.": { en: "JSON formatting, encoding, and simple data conversion tasks.", ja: "JSON整形、エンコード、簡単なデータ変換作業。", zh: "JSON 格式化、编码和简单数据转换。" },
  "UUID, 비밀번호, QR 같은 값 생성 도구.": { en: "Generate values such as UUIDs, passwords, and QR codes.", ja: "UUID、パスワード、QRなどの値を生成するツール。", zh: "生成 UUID、密码、QR 等值的工具。" },
  "추천 도구": { en: "Featured tools", ja: "おすすめツール", zh: "推荐工具" },
  "초기 운영에 적합한 검색 수요형 유틸부터 배치했습니다.": { en: "The starter set focuses on search-friendly utilities suitable for early operation.", ja: "初期運営に適した検索需要のあるユーティリティから配置しました。", zh: "首批工具优先放置适合早期运营、具备搜索需求的实用工具。" },
  "글자 수 세기": { en: "Word counter", ja: "文字数カウント", zh: "字数统计" },
  "문자, 단어, 줄 수를 즉시 계산합니다.": { en: "Instantly count characters, words, and lines.", ja: "文字、単語、行数をすぐに計算します。", zh: "即时计算字符、单词和行数。" },
  "JSON 포맷터": { en: "JSON formatter", ja: "JSONフォーマッター", zh: "JSON 格式化工具" },
  "JSON을 보기 좋게 정리하고 오류 위치를 확인합니다.": { en: "Format JSON for readability and check parsing errors.", ja: "JSONを読みやすく整形し、エラーを確認します。", zh: "美化 JSON 并检查解析错误。" },
  "UUID 생성기": { en: "UUID generator", ja: "UUIDジェネレーター", zh: "UUID 生成器" },
  "브라우저에서 UUID v4 값을 빠르게 생성합니다.": { en: "Quickly generate UUID v4 values in your browser.", ja: "ブラウザーでUUID v4を素早く生成します。", zh: "在浏览器中快速生成 UUID v4。" },
  "All tools run in your browser.": { en: "All tools run in your browser.", ja: "すべてのツールはブラウザー内で動作します。", zh: "所有工具都在浏览器中运行。" },
  "개인정보처리방침": { en: "Privacy policy", ja: "プライバシーポリシー", zh: "隐私政策" },
  "문서와 텍스트를 빠르게 다듬는 브라우저 기반 유틸 모음입니다.": { en: "Browser-based utilities for quickly refining documents and text.", ja: "文書とテキストを素早く整えるブラウザーベースのツール集です。", zh: "用于快速整理文档和文本的浏览器工具集。" },
  "브라우저 안에서 바로 계산하고 정리합니다.": { en: "Calculate and clean up directly in your browser.", ja: "ブラウザー内ですぐに計算・整理できます。", zh: "直接在浏览器中计算和整理。" },
  "문자, 단어, 줄 수를 실시간으로 확인합니다.": { en: "Check characters, words, and lines in real time.", ja: "文字、単語、行数をリアルタイムで確認します。", zh: "实时查看字符、单词和行数。" },
  "입력한 내용은 서버로 전송되지 않습니다.": { en: "Your input is not sent to a server.", ja: "入力内容はサーバーに送信されません。", zh: "输入内容不会发送到服务器。" },
  "전체 문자": { en: "Characters", ja: "全文字", zh: "全部字符" },
  "공백 제외": { en: "No spaces", ja: "空白除外", zh: "不含空格" },
  "단어": { en: "Words", ja: "単語", zh: "单词" },
  "줄": { en: "Lines", ja: "行", zh: "行" },
  "지우기": { en: "Clear", ja: "クリア", zh: "清除" },
  "테스트 예문": { en: "Sample", ja: "サンプル", zh: "测试示例" },
  "미리보기": { en: "Preview", ja: "プレビュー", zh: "预览" },
  "JSON 포맷터 등 개발 작업에 필요한 브라우저 기반 유틸 모음입니다.": { en: "Browser-based utilities for development tasks, including a JSON formatter.", ja: "JSONフォーマッターなど、開発作業に役立つブラウザーベースのツール集です。", zh: "用于开发任务的浏览器工具集，包括 JSON 格式化工具。" },
  "작은 데이터 처리 작업을 빠르게 끝냅니다.": { en: "Finish small data processing tasks quickly.", ja: "小さなデータ処理を素早く終わらせます。", zh: "快速完成小型数据处理任务。" },
  "JSON을 정리하고 파싱 오류를 확인합니다.": { en: "Format JSON and check parsing errors.", ja: "JSONを整形し、解析エラーを確認します。", zh: "格式化 JSON 并检查解析错误。" },
  "입력한 JSON은 브라우저 안에서만 처리됩니다.": { en: "Your JSON is processed only in the browser.", ja: "入力したJSONはブラウザー内だけで処理されます。", zh: "输入的 JSON 仅在浏览器内处理。" },
  "정리하기": { en: "Format", ja: "整形", zh: "格式化" },
  "압축하기": { en: "Minify", ja: "圧縮", zh: "压缩" },
  "복사": { en: "Copy", ja: "コピー", zh: "复制" },
  "결과가 여기에 표시됩니다.": { en: "Results will appear here.", ja: "結果がここに表示されます。", zh: "结果会显示在这里。" },
  "JSON 오류:": { en: "JSON error:", ja: "JSONエラー:", zh: "JSON 错误：" },
  "UUID 등 자주 필요한 값을 브라우저에서 바로 생성하는 도구 모음입니다.": { en: "Generate frequently needed values such as UUIDs directly in your browser.", ja: "UUIDなどよく使う値をブラウザーで直接生成するツール集です。", zh: "直接在浏览器中生成 UUID 等常用值的工具集。" },
  "테스트와 문서 작성에 필요한 값을 즉시 만듭니다.": { en: "Create values for testing and documentation instantly.", ja: "テストや文書作成に必要な値をすぐに作成します。", zh: "即时生成测试和文档编写所需的值。" },
  "UUID v4 값을 빠르게 생성하고 복사합니다.": { en: "Quickly generate and copy UUID v4 values.", ja: "UUID v4を素早く生成してコピーします。", zh: "快速生成并复制 UUID v4。" },
  "브라우저에서 UUID v4 값을 생성하고 복사하는 간단한 도구입니다.": { en: "A simple tool for generating and copying UUID v4 values in your browser.", ja: "ブラウザーでUUID v4を生成してコピーするシンプルなツールです。", zh: "一个在浏览器中生成并复制 UUID v4 的简单工具。" },
  "UUID는 브라우저의 crypto API로 생성됩니다.": { en: "UUIDs are generated with the browser crypto API.", ja: "UUIDはブラウザーのcrypto APIで生成されます。", zh: "UUID 使用浏览器 crypto API 生成。" },
  "새 UUID": { en: "New UUID", ja: "新しいUUID", zh: "新 UUID" },
  "최종 업데이트: 2026-06-15": { en: "Last updated: 2026-06-15", ja: "最終更新: 2026-06-15", zh: "最后更新：2026-06-15" },
  "Web-Tool.Shop의 기본 도구는 입력값을 서버로 전송하지 않고 사용자의 브라우저에서 처리합니다.": { en: "Web-Tool.Shop's basic tools process input in your browser without sending it to a server.", ja: "Web-Tool.Shopの基本ツールは入力値をサーバーに送信せず、ユーザーのブラウザー内で処理します。", zh: "Web-Tool.Shop 的基础工具会在用户浏览器中处理输入，不会发送到服务器。" },
  "향후 광고 또는 방문 통계 서비스를 붙이는 경우 해당 서비스 제공자가 쿠키, 기기 정보, 방문 기록 일부를 처리할 수 있습니다.": { en: "If advertising or analytics services are added later, those providers may process cookies, device information, and parts of visit history.", ja: "今後、広告またはアクセス解析サービスを追加する場合、提供事業者がCookie、端末情報、訪問履歴の一部を処理することがあります。", zh: "如果未来接入广告或访问统计服务，相关服务提供商可能会处理 Cookie、设备信息和部分访问记录。" },
  "문의 이메일과 실제 광고 서비스 정보는 사이트 공개 전에 운영자 정보에 맞게 업데이트해야 합니다.": { en: "Contact email and actual advertising service details should be updated before publishing the site.", ja: "問い合わせメールと実際の広告サービス情報は、公開前に運営者情報に合わせて更新してください。", zh: "联系邮箱和实际广告服务信息应在网站公开前根据运营者信息更新。" },
  "페이지를 찾을 수 없습니다": { en: "Page not found", ja: "ページが見つかりません", zh: "找不到页面" },
  "주소가 바뀌었거나 아직 만들어지지 않은 도구입니다.": { en: "The address may have changed, or this tool may not exist yet.", ja: "アドレスが変更されたか、まだ作成されていないツールです。", zh: "地址可能已更改，或该工具尚未创建。" },
  "홈으로 돌아가기": { en: "Back to home", ja: "ホームへ戻る", zh: "返回首页" },
};

const attributeTranslations = {
  "Web-Tool.Shop 홈": { en: "Web-Tool.Shop home", ja: "Web-Tool.Shopホーム", zh: "Web-Tool.Shop 首页" },
  "주요 메뉴": textTranslations["주요 메뉴"],
  "도구 검색": textTranslations["도구 검색"],
  "광고 영역": { en: "Ad area", ja: "広告エリア", zh: "广告区域" },
  "예: 글자 수, JSON, UUID": { en: "e.g. word count, JSON, UUID", ja: "例: 文字数、JSON、UUID", zh: "例如：字数、JSON、UUID" },
  "여기에 텍스트를 붙여넣으세요.": { en: "Paste text here.", ja: "ここにテキストを貼り付けてください。", zh: "在此粘贴文本。" },
  "경로": { en: "Breadcrumb", ja: "パンくずリスト", zh: "路径" },
};

const pageTranslations = {
  "/": {
    title: { ko: "Web-Tool.Shop - 무료 웹 유틸리티 모음", en: "Web-Tool.Shop - Free web utility tools", ja: "Web-Tool.Shop - 無料Webユーティリティ集", zh: "Web-Tool.Shop - 免费网页工具集合" },
    description: { ko: "설치 없이 브라우저에서 바로 쓰는 무료 웹 유틸리티 모음입니다. JSON, XML, SQL, CSV, UUID, 글자 수 도구를 빠르게 사용하세요.", en: "Free browser-based web utilities for JSON, XML, SQL, CSV, UUID, and word counting without installing anything.", ja: "インストール不要で使える無料Webユーティリティ集です。JSON、XML、SQL、CSV、UUID、文字数ツールをすばやく使えます。", zh: "无需安装即可使用的免费网页工具集合，包含 JSON、XML、SQL、CSV、UUID 和字数统计工具。" },
  },
  "/tools/text/": {
    title: { ko: "텍스트 도구 - Web-Tool.Shop", en: "Text tools - Web-Tool.Shop", ja: "テキストツール - Web-Tool.Shop", zh: "文本工具 - Web-Tool.Shop" },
    description: { ko: "글자 수 세기처럼 문서와 텍스트를 빠르게 확인하고 정리하는 무료 브라우저 도구 모음입니다.", en: "Free browser tools for checking and cleaning text, including word and character counting.", ja: "文字数カウントなど、文書とテキストをすばやく確認・整理できる無料ブラウザーツール集です。", zh: "免费浏览器文本工具集合，可快速检查和整理文本，包括字数统计。" },
  },
  "/tools/text/word-counter/": {
    title: { ko: "글자 수 세기 - Web-Tool.Shop", en: "Word counter - Web-Tool.Shop", ja: "文字数カウント - Web-Tool.Shop", zh: "字数统计 - Web-Tool.Shop" },
    description: { ko: "텍스트의 문자 수, 공백 제외 문자 수, 단어 수, 줄 수를 브라우저에서 즉시 계산합니다.", en: "Instantly count characters, characters without spaces, words, and lines in your browser.", ja: "テキストの文字数、空白を除いた文字数、単語数、行数をブラウザーですぐに計算します。", zh: "在浏览器中即时计算文本的字符数、不含空格字符数、单词数和行数。" },
  },
  "/tools/developer/": {
    title: { ko: "개발자 도구 - Web-Tool.Shop", en: "Developer tools - Web-Tool.Shop", ja: "開発者ツール - Web-Tool.Shop", zh: "开发者工具 - Web-Tool.Shop" },
    description: { ko: "JSON, XML, SQL, CSV 데이터를 브라우저에서 정리하고 가능한 오류를 자동 복구하는 무료 개발자 도구 모음입니다.", en: "Free developer tools for formatting JSON, XML, SQL, and CSV data in your browser with practical auto repair.", ja: "JSON、XML、SQL、CSVデータをブラウザーで整形し、可能なエラーを自動修復する無料開発者ツール集です。", zh: "免费的开发者工具集合，可在浏览器中格式化 JSON、XML、SQL、CSV 数据并自动修复常见错误。" },
  },
  "/tools/developer/json-formatter/": {
    title: { ko: "JSON 포맷터 - Web-Tool.Shop", en: "JSON formatter - Web-Tool.Shop", ja: "JSONフォーマッター - Web-Tool.Shop", zh: "JSON 格式化工具 - Web-Tool.Shop" },
    description: { ko: "JSON 문자열을 보기 좋게 정리하고 누락된 따옴표, 중괄호, 대괄호, 후행 쉼표를 가능한 범위에서 자동 복구합니다.", en: "Format JSON and automatically repair missing quotes, braces, brackets, and trailing commas where possible.", ja: "JSONを整形し、不足した引用符、中括弧、角括弧、末尾のカンマを可能な範囲で自動修復します。", zh: "格式化 JSON，并尽可能自动修复缺失的引号、大括号、中括号和尾随逗号。" },
  },
  "/tools/generator/": {
    title: { ko: "생성기 - Web-Tool.Shop", en: "Generators - Web-Tool.Shop", ja: "ジェネレーター - Web-Tool.Shop", zh: "生成器 - Web-Tool.Shop" },
    description: { ko: "UUID 등 자주 필요한 값을 브라우저에서 바로 생성하는 도구 모음입니다.", en: "Generate frequently needed values such as UUIDs directly in your browser.", ja: "UUIDなどよく使う値をブラウザーで直接生成するツール集です。", zh: "直接在浏览器中生成 UUID 等常用值的工具集。" },
  },
  "/tools/generator/uuid-generator/": {
    title: { ko: "UUID 생성기 - Web-Tool.Shop", en: "UUID generator - Web-Tool.Shop", ja: "UUIDジェネレーター - Web-Tool.Shop", zh: "UUID 生成器 - Web-Tool.Shop" },
    description: { ko: "브라우저에서 UUID v4 값을 생성하고 복사하는 간단한 도구입니다.", en: "A simple tool for generating and copying UUID v4 values in your browser.", ja: "ブラウザーでUUID v4を生成してコピーするシンプルなツールです。", zh: "一个在浏览器中生成并复制 UUID v4 的简单工具。" },
  },
  "/privacy.html": {
    title: { ko: "개인정보처리방침 - Web-Tool.Shop", en: "Privacy policy - Web-Tool.Shop", ja: "プライバシーポリシー - Web-Tool.Shop", zh: "隐私政策 - Web-Tool.Shop" },
    description: { ko: "Web-Tool.Shop 개인정보처리방침입니다.", en: "Web-Tool.Shop privacy policy.", ja: "Web-Tool.Shopのプライバシーポリシーです。", zh: "Web-Tool.Shop 隐私政策。" },
  },
  "/404.html": {
    title: { ko: "페이지를 찾을 수 없습니다 - Web-Tool.Shop", en: "Page not found - Web-Tool.Shop", ja: "ページが見つかりません - Web-Tool.Shop", zh: "找不到页面 - Web-Tool.Shop" },
    description: { ko: "페이지를 찾을 수 없습니다.", en: "Page not found.", ja: "ページが見つかりません。", zh: "找不到页面。" },
  },
};

function getStoredLanguage() {
  const stored = localStorage.getItem("gadget-language");
  if (supportedLanguages.includes(stored)) return stored;

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ja")) return "ja";
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("en")) return "en";
  return "ko";
}

function translate(key, language) {
  if (language === "ko") return key;
  return textTranslations[key]?.[language] || key;
}

function normalizePath() {
  let path = window.location.pathname.replace(/\/index\.html$/, "/");
  const toolsIndex = path.indexOf("/tools/");
  if (toolsIndex >= 0) return path.slice(toolsIndex);
  if (path.endsWith("/privacy.html")) return "/privacy.html";
  if (path.endsWith("/404.html")) return "/404.html";
  return "/";
}

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    const key = node.__i18nKey || node.textContent.trim();
    if (!textTranslations[key]) continue;
    node.__i18nKey = key;
    const leading = node.textContent.match(/^\s*/)[0];
    const trailing = node.textContent.match(/\s*$/)[0];
    node.textContent = `${leading}${translate(key, language)}${trailing}`;
  }
}

function translateAttributes(language) {
  for (const element of document.querySelectorAll("[placeholder], [aria-label]")) {
    for (const attr of ["placeholder", "aria-label"]) {
      if (!element.hasAttribute(attr)) continue;
      const storeKey = `i18n${attr.replace("-", "")}`;
      const key = element.dataset[storeKey] || element.getAttribute(attr);
      if (!attributeTranslations[key]) continue;
      element.dataset[storeKey] = key;
      element.setAttribute(attr, language === "ko" ? key : attributeTranslations[key][language] || key);
    }
  }
}

function translatePageMeta(language) {
  const page = pageTranslations[normalizePath()] || pageTranslations["/"];
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = page.title[language] || page.title.ko;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", page.description[language] || page.description.ko);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", page.title[language] || page.title.ko);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", page.description[language] || page.description.ko);
}

function injectLanguageSelect(language) {
  const header = document.querySelector(".site-header");
  if (!header || document.querySelector("#language-select")) return;

  const label = document.createElement("label");
  label.className = "language-switcher";
  label.setAttribute("aria-label", "Language");

  const select = document.createElement("select");
  select.id = "language-select";

  for (const code of supportedLanguages) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = languageNames[code];
    option.selected = code === language;
    select.append(option);
  }

  select.addEventListener("change", () => {
    localStorage.setItem("gadget-language", select.value);
    applyLanguage(select.value);
  });

  label.append(select);
  header.append(label);
}

function translateUiMessage(key, language = window.gadgetLanguage || getStoredLanguage()) {
  return translate(key, language);
}

window.gadgetTranslate = translateUiMessage;

function applyLanguage(language) {
  translatePageMeta(language);
  translateTextNodes(language);
  translateAttributes(language);
  const select = document.querySelector("#language-select");
  if (select) select.value = language;
  window.gadgetLanguage = language;
}

const initialLanguage = getStoredLanguage();
injectLanguageSelect(initialLanguage);
applyLanguage(initialLanguage);
