const plainInput = document.querySelector("#plain-input");
const encodedInput = document.querySelector("#encoded-input");
const status = document.querySelector("#url-status");
const spaceAsPlus = document.querySelector("#space-as-plus");
const encodeButton = document.querySelector("#encode");
const decodeButton = document.querySelector("#decode");
const swapButton = document.querySelector("#swap");
const sampleButton = document.querySelector("#sample");
const copyButton = document.querySelector("#copy");
const clearButton = document.querySelector("#clear");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function encodeText(value) {
  const encoded = encodeURIComponent(value);
  return spaceAsPlus.checked ? encoded.replace(/%20/g, "+") : encoded;
}

function decodeText(value) {
  const normalized = spaceAsPlus.checked ? value.replace(/\+/g, "%20") : value;
  return decodeURIComponent(normalized);
}

function setStatus(text, isError = false) {
  status.textContent = message(text);
  status.dataset.state = isError ? "error" : "ok";
}

function encodeValue() {
  encodedInput.value = encodeText(plainInput.value);
  setStatus("URL 인코딩을 완료했습니다.");
}

function decodeValue() {
  try {
    plainInput.value = decodeText(encodedInput.value);
    setStatus("URL 디코딩을 완료했습니다.");
  } catch (_) {
    setStatus("URL 인코딩 문자열이 올바르지 않습니다.", true);
  }
}

encodeButton.addEventListener("click", encodeValue);
decodeButton.addEventListener("click", decodeValue);
swapButton.addEventListener("click", () => {
  const plain = plainInput.value;
  plainInput.value = encodedInput.value;
  encodedInput.value = plain;
  setStatus("두 값을 서로 바꿨습니다.");
});
sampleButton.addEventListener("click", () => {
  plainInput.value = "안녕하세요 Web-Tool.Shop? q=한글 테스트&lang=ko";
  encodeValue();
});
copyButton.addEventListener("click", () => {
  const value = encodedInput.value || plainInput.value;
  navigator.clipboard?.writeText(value);
  setStatus("복사했습니다.");
});
clearButton.addEventListener("click", () => {
  plainInput.value = "";
  encodedInput.value = "";
  setStatus("결과가 여기에 표시됩니다.");
});
spaceAsPlus.addEventListener("change", () => {
  if (plainInput.value) encodeValue();
});

sampleButton.click();
