const modeSelect = document.querySelector("#compare-mode");
const leftInput = document.querySelector("#left-input");
const rightInput = document.querySelector("#right-input");
const output = document.querySelector("#compare-output");
const status = document.querySelector("#compare-status");
const sampleButton = document.querySelector("#sample");
const swapButton = document.querySelector("#swap");
const clearButton = document.querySelector("#clear");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function currentLanguage() {
  const queryLocale = new URLSearchParams(window.location.search).get("locale");
  const locale = String(queryLocale || window.gadgetLanguage || "ko").toLowerCase();
  if (locale.startsWith("en")) return "en";
  if (locale.startsWith("ja")) return "ja";
  if (locale.startsWith("zh")) return "zh";
  return "ko";
}

function localizedSample(samples) {
  return samples[currentLanguage()] || samples.ko;
}

const samples = {
  text: {
    ko: ["Web-Tool.Shop\n텍스트 비교\nJSON 비교", "Web-Tool.Shop\n텍스트 차이\nJSON 비교\nXML 비교"],
    en: ["Web-Tool.Shop\nText compare\nJSON compare", "Web-Tool.Shop\nText diff\nJSON compare\nXML compare"],
    ja: ["Web-Tool.Shop\nテキスト比較\nJSON比較", "Web-Tool.Shop\nテキスト差分\nJSON比較\nXML比較"],
    zh: ["Web-Tool.Shop\n文本比较\nJSON 比较", "Web-Tool.Shop\n文本差异\nJSON 比较\nXML 比较"],
  },
  json: {
    ko: ['{name:"웹 도구",items:["텍스트","JSON"]}', '{"name":"웹 도구","items":["텍스트","JSON","XML"],"ready":true}'],
    en: ['{name:"Web-Tool.Shop",items:["text","JSON"]}', '{"name":"Web-Tool.Shop","items":["text","JSON","XML"],"ready":true}'],
    ja: ['{name:"Webツール",items:["テキスト","JSON"]}', '{"name":"Webツール","items":["テキスト","JSON","XML"],"ready":true}'],
    zh: ['{name:"网页工具",items:["文本","JSON"]}', '{"name":"网页工具","items":["文本","JSON","XML"],"ready":true}'],
  },
  xml: {
    ko: ["<note><to>사용자</to><message>안녕하세요</message></note>", "<note priority=high><to>사용자</to><message>안녕하세요 Web-Tool.Shop</message></note>"],
    en: ["<note><to>User</to><message>Hello</message></note>", "<note priority=high><to>User</to><message>Hello world</message></note>"],
    ja: ["<note><to>ユーザー</to><message>こんにちは</message></note>", "<note priority=high><to>ユーザー</to><message>こんにちは Web-Tool.Shop</message></note>"],
    zh: ["<note><to>用户</to><message>你好</message></note>", "<note priority=high><to>用户</to><message>你好 Web-Tool.Shop</message></note>"],
  },
};

function normalizeJson(value) {
  const result = window.formatUtils.parseJsonWithRepair(value);
  if (!result.value) return { text: result.repaired || value, error: result.error };
  return { text: JSON.stringify(result.value, null, 2), error: null };
}

function normalizeXml(value) {
  const result = window.formatUtils.formatXml(value);
  return { text: result.output || result.repaired || value, error: result.error };
}

function normalize(value, mode) {
  if (mode === "json") return normalizeJson(value);
  if (mode === "xml") return normalizeXml(value);
  return { text: value.replace(/\r\n/g, "\n"), error: null };
}

function diffLines(leftText, rightText) {
  const left = leftText.split("\n");
  const right = rightText.split("\n");
  const rows = Array.from({ length: left.length + 1 }, () => Array(right.length + 1).fill(0));

  for (let i = left.length - 1; i >= 0; i -= 1) {
    for (let j = right.length - 1; j >= 0; j -= 1) {
      rows[i][j] = left[i] === right[j] ? rows[i + 1][j + 1] + 1 : Math.max(rows[i + 1][j], rows[i][j + 1]);
    }
  }

  const changes = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      changes.push({ type: "same", left: left[i], right: right[j] });
      i += 1;
      j += 1;
    } else if (rows[i + 1][j] >= rows[i][j + 1]) {
      changes.push({ type: "remove", left: left[i], right: "" });
      i += 1;
    } else {
      changes.push({ type: "add", left: "", right: right[j] });
      j += 1;
    }
  }

  while (i < left.length) changes.push({ type: "remove", left: left[i++], right: "" });
  while (j < right.length) changes.push({ type: "add", left: "", right: right[j++] });
  return changes;
}

function renderChanges(changes) {
  output.replaceChildren();
  const table = document.createElement("div");
  table.className = "diff-table";

  for (const change of changes) {
    const row = document.createElement("div");
    row.className = `diff-row diff-${change.type}`;

    const marker = document.createElement("span");
    marker.className = "diff-marker";
    marker.textContent = change.type === "add" ? "+" : change.type === "remove" ? "-" : " ";

    const left = document.createElement("code");
    left.textContent = change.left;

    const right = document.createElement("code");
    right.textContent = change.right;

    row.append(marker, left, right);
    table.append(row);
  }

  output.append(table);
}

function compare() {
  const mode = modeSelect.value;
  const left = normalize(leftInput.value, mode);
  const right = normalize(rightInput.value, mode);
  const changes = diffLines(left.text, right.text);
  const changedCount = changes.filter((change) => change.type !== "same").length;

  renderChanges(changes);
  status.textContent = changedCount === 0 ? message("두 내용이 같습니다.") : `${message("변경 라인")} ${changedCount}`;
}

function fillSample() {
  const mode = modeSelect.value;
  const [left, right] = localizedSample(samples[mode] || samples.text);
  leftInput.value = left;
  rightInput.value = right;
  compare();
}

sampleButton.addEventListener("click", fillSample);
modeSelect.addEventListener("change", fillSample);
leftInput.addEventListener("input", compare);
rightInput.addEventListener("input", compare);
swapButton.addEventListener("click", () => {
  const left = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = left;
  compare();
});
clearButton.addEventListener("click", () => {
  leftInput.value = "";
  rightInput.value = "";
  output.textContent = message("결과가 여기에 표시됩니다.");
  status.textContent = message("결과가 여기에 표시됩니다.");
});

fillSample();
