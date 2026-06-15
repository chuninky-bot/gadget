const input = document.querySelector("#xml-input");
const output = document.querySelector("#xml-output");
const status = document.querySelector("#xml-status");
const formatButton = document.querySelector("#format");
const repairButton = document.querySelector("#repair");
const copyButton = document.querySelector("#copy");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function formatXml(writeRepair = false) {
  const result = window.formatUtils.formatXml(input.value);
  if (writeRepair) input.value = result.repaired;
  output.textContent = result.output;
  status.textContent = result.error ? `${message("XML 오류:")} ${result.error}` : (result.changed ? message("자동 복구 후 정리했습니다.") : message("유효한 형식입니다."));
}

formatButton.addEventListener("click", () => formatXml(false));
repairButton.addEventListener("click", () => formatXml(true));
copyButton.addEventListener("click", () => navigator.clipboard?.writeText(output.textContent));

const sampleButton = document.querySelector("#sample");

sampleButton.addEventListener("click", () => {
  input.value = '<note priority=high><to>User</to><message>Hello & welcome';
  formatXml(true);
  input.focus();
});
