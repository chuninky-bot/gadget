const input = document.querySelector("#xml-input");
const output = document.querySelector("#xml-output");
const status = document.querySelector("#xml-status");
const sampleButton = document.querySelector("#sample");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function formatXml(writeRepair = false) {
  const result = window.formatUtils.formatXml(input.value);
  if (writeRepair) input.value = result.repaired;
  output.textContent = result.output;
  status.textContent = result.error ? `${message("XML 오류:")} ${result.error}` : (result.changed ? message("자동 복구 후 정리했습니다.") : message("유효한 형식입니다."));
}

sampleButton.addEventListener("click", () => {
  input.value = '<note priority=high><to>User</to><message>Hello & welcome';
  formatXml(true);
  input.focus();
});
input.addEventListener("input", () => formatXml(true));

formatXml(true);
