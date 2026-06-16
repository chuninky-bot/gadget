const input = document.querySelector("#excel-input");
const output = document.querySelector("#excel-output");
const status = document.querySelector("#excel-status");
const delimiterSelect = document.querySelector("#delimiter");
const sampleButton = document.querySelector("#sample");
const preview = document.querySelector("#preview");

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
  ko: '이름,가격,분류\n"키보드,19900,장치\n마우스,9900',
  en: 'name,price,category\n"keyboard,19900,device\nmouse,9900',
  ja: '名前,価格,分類\n"キーボード,19900,機器\nマウス,9900',
  zh: '名称,价格,分类\n"键盘,19900,设备\n鼠标,9900',
};

function selectedDelimiter() {
  if (delimiterSelect.value === "tab") return "\t";
  if (delimiterSelect.value === "semicolon") return ";";
  if (delimiterSelect.value === "auto") return window.formatUtils.detectDelimiter(input.value);
  return ",";
}

function renderPreview(rows) {
  preview.innerHTML = "";
  const table = document.createElement("table");
  for (const row of rows.slice(0, 20)) {
    const tr = document.createElement("tr");
    for (const cell of row.slice(0, 12)) {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.append(td);
    }
    table.append(tr);
  }
  preview.append(table);
}

function formatDelimited() {
  if (!input.value.trim()) {
    output.textContent = message("결과가 여기에 표시됩니다.");
    status.textContent = message("결과가 여기에 표시됩니다.");
    preview.replaceChildren();
    return;
  }

  const delimiter = selectedDelimiter();
  const rows = window.formatUtils.parseDelimited(input.value, delimiter);
  output.textContent = window.formatUtils.stringifyDelimited(rows, delimiterSelect.value === "tab" ? "\t" : ",");
  renderPreview(rows);
  status.textContent = `${message("정리했습니다.")} ${rows.length} ${message("줄")}`;
}

sampleButton.addEventListener("click", () => {
  delimiterSelect.value = "auto";
  input.value = localizedSample(samples);
  formatDelimited();
  input.focus();
});
input.addEventListener("input", formatDelimited);
delimiterSelect.addEventListener("change", formatDelimited);

formatDelimited();
