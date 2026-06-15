const input = document.querySelector("#excel-input");
const output = document.querySelector("#excel-output");
const status = document.querySelector("#excel-status");
const delimiterSelect = document.querySelector("#delimiter");
const formatButton = document.querySelector("#format");
const tsvButton = document.querySelector("#tsv");
const copyButton = document.querySelector("#copy");
const preview = document.querySelector("#preview");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

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

function formatDelimited(delimiter = selectedDelimiter()) {
  const rows = window.formatUtils.parseDelimited(input.value, selectedDelimiter());
  output.textContent = window.formatUtils.stringifyDelimited(rows, delimiter);
  renderPreview(rows);
  status.textContent = `${message("정리했습니다.")} ${rows.length} ${message("행")}`;
}

formatButton.addEventListener("click", () => formatDelimited(","));
tsvButton.addEventListener("click", () => formatDelimited("\t"));
copyButton.addEventListener("click", () => navigator.clipboard?.writeText(output.textContent));

const sampleButton = document.querySelector("#sample");

sampleButton.addEventListener("click", () => {
  delimiterSelect.value = "auto";
  input.value = 'name,price,category\n"keyboard,19900,device\nmouse,9900';
  formatDelimited(",");
  input.focus();
});
