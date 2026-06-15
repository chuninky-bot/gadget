const input = document.querySelector("#encoding-input");
const output = document.querySelector("#encoding-output");
const status = document.querySelector("#encoding-status");
const convertButton = document.querySelector("#convert");
const sampleButton = document.querySelector("#sample");
const clearButton = document.querySelector("#clear");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

function bytesToBinary(bytes) {
  return Array.from(bytes, (byte) => byte.toString(2).padStart(8, "0")).join(" ");
}

function bytesToPercent(bytes) {
  return Array.from(bytes, (byte) => `%${byte.toString(16).padStart(2, "0").toUpperCase()}`).join("");
}

function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function unicodeCodePoints(text) {
  return Array.from(text, (char) => `U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}`).join(" ");
}

function utf16CodeUnits(text) {
  return Array.from(text, (_, index) => text.charCodeAt(index).toString(16).toUpperCase().padStart(4, "0"))
    .map((unit) => `0x${unit}`)
    .join(" ");
}

function htmlEntities(text) {
  return Array.from(text, (char) => `&#x${char.codePointAt(0).toString(16).toUpperCase()};`).join("");
}

function encodeEucKr(text) {
  try {
    return new TextEncoder("euc-kr", { NONSTANDARD_allowLegacyEncoding: true }).encode(text);
  } catch (_) {
    return null;
  }
}

function eucKrFallback() {
  return message("브라우저 기본 TextEncoder는 UTF-8만 지원합니다. EUC-KR 실제 바이트 변환은 별도 인코딩 테이블이 필요합니다.");
}

function createResultCard(title, value) {
  const article = document.createElement("article");
  article.className = "encoding-card";

  const heading = document.createElement("h2");
  heading.textContent = message(title);

  const pre = document.createElement("pre");
  pre.textContent = value || "-";

  const button = document.createElement("button");
  button.className = "button secondary";
  button.type = "button";
  button.textContent = message("복사");
  button.addEventListener("click", () => navigator.clipboard?.writeText(pre.textContent));

  article.append(heading, pre, button);
  return article;
}

function convert() {
  const text = input.value;
  const utf8 = new TextEncoder().encode(text);
  const eucKr = encodeEucKr(text);
  const rows = [
    ["원문", text],
    ["UTF-8 HEX", bytesToHex(utf8)],
    ["UTF-8 Bytes", Array.from(utf8).join(", ")],
    ["UTF-8 Binary", bytesToBinary(utf8)],
    ["HEX", bytesToHex(utf8).replace(/\s/g, "")],
    ["URL Percent Encoding", bytesToPercent(utf8)],
    ["encodeURIComponent", encodeURIComponent(text)],
    ["Base64 (UTF-8)", bytesToBase64(utf8)],
    ["Unicode Code Point", unicodeCodePoints(text)],
    ["UTF-16 Code Unit", utf16CodeUnits(text)],
    ["HTML Entity", htmlEntities(text)],
    ["EUC-KR HEX", eucKr ? bytesToHex(eucKr) : eucKrFallback()],
    ["EUC-KR Bytes", eucKr ? eucKr.join(", ") : eucKrFallback()],
  ];

  output.replaceChildren(...rows.map(([title, value]) => createResultCard(title, value)));
  status.textContent = message("인코딩 변환을 완료했습니다.");
}

convertButton.addEventListener("click", convert);
sampleButton.addEventListener("click", () => {
  input.value = "Web-Tool.Shop 인코딩 테스트 ABC 123";
  convert();
});
clearButton.addEventListener("click", () => {
  input.value = "";
  output.replaceChildren();
  status.textContent = message("결과가 여기에 표시됩니다.");
});

input.value = "Web-Tool.Shop 인코딩 테스트";
convert();
