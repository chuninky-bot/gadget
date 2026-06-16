const input = document.querySelector("#excel-input");
const output = document.querySelector("#excel-output");
const status = document.querySelector("#excel-status");
const delimiterSelect = document.querySelector("#delimiter");
const sampleButton = document.querySelector("#sample");
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

function formatDelimited() {
  const delimiter = selectedDelimiter();
  const rows = window.formatUtils.parseDelimited(input.value, delimiter);
  output.textContent = window.formatUtils.stringifyDelimited(rows, delimiterSelect.value === "tab" ? "\t" : ",");
  renderPreview(rows);
  status.textContent = `${message("정리했습니다.")} ${rows.length} ${message("줄")}`;
}

sampleButton.addEventListener("click", () => {
  delimiterSelect.value = "auto";
  input.value = 'name,price,category\n"keyboard,19900,device\nmouse,9900';
  formatDelimited();
  input.focus();
});
input.addEventListener("input", formatDelimited);
delimiterSelect.addEventListener("change", formatDelimited);

formatDelimited();
