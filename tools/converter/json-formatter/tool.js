const input = document.querySelector("#json-input");
const output = document.querySelector("#json-output");
const status = document.querySelector("#json-status");
const sampleButton = document.querySelector("#sample");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function renderJson(writeRepair = false) {
  const result = window.formatUtils.parseJsonWithRepair(input.value);

  if (!result.value) {
    output.textContent = result.repaired || input.value;
    status.textContent = `${message("JSON 오류:")} ${result.error.message}`;
    return;
  }

  if (writeRepair) input.value = result.repaired;
  output.textContent = JSON.stringify(result.value, null, 2);
  status.textContent = result.changed ? message("자동 복구 후 정리했습니다.") : message("유효한 형식입니다.");
}

sampleButton.addEventListener("click", () => {
  input.value = '{name:"Web-Tool.Shop", ready:true, items:["json","xml",';
  renderJson(true);
  input.focus();
});
input.addEventListener("input", () => renderJson(true));

renderJson(true);
