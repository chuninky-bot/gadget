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
  if (mode === "json") {
    leftInput.value = '{name:"Web-Tool.Shop",items:[1,2]}';
    rightInput.value = '{"name":"Web-Tool.Shop","items":[1,2,3],"ready":true}';
  } else if (mode === "xml") {
    leftInput.value = "<note><to>User</to><message>Hello</message></note>";
    rightInput.value = "<note priority=high><to>User</to><message>Hello world</message></note>";
  } else {
    leftInput.value = "Web-Tool.Shop\nText compare\nJSON compare";
    rightInput.value = "Web-Tool.Shop\nText diff\nJSON compare\nXML compare";
  }
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
