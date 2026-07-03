const input = document.querySelector("#base64-source");
const output = document.querySelector("#base64-output");
const status = document.querySelector("#base64-status");
const sampleTextButton = document.querySelector("#sample-text");
const sampleBase64Button = document.querySelector("#sample-base64");
const clearButton = document.querySelector("#clear");

const encodings = [
  { label: "UTF-8", value: "utf-8" },
  { label: "EUC-KR", value: "euc-kr" },
  { label: "UTF-16LE", value: "utf-16le" },
  { label: "ISO-8859-1", value: "iso-8859-1" },
  { label: "Windows-1252", value: "windows-1252" },
  { label: "Shift_JIS", value: "shift-jis" },
  { label: "GBK", value: "gbk" },
  { label: "Big5", value: "big5" },
  { label: "EUC-JP", value: "euc-jp" },
  { label: "Windows-1251", value: "windows-1251" },
];

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

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

function encodeBytes(text, encoding) {
  if (encoding === "utf-8") return new (window.NativeTextEncoder || TextEncoder)().encode(text);
  try {
    return new TextEncoder(encoding, { NONSTANDARD_allowLegacyEncoding: true }).encode(text);
  } catch (_) {
    return null;
  }
}

function decodeBytes(bytes, encoding) {
  try {
    return new TextDecoder(encoding, { fatal: false }).decode(bytes);
  } catch (_) {
    return "";
  }
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(value) {
  const normalized = value.trim().replace(/\s+/g, "");
  if (!normalized || normalized.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(normalized)) return null;
  try {
    const binary = atob(normalized);
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
  } catch (_) {
    return null;
  }
}

function createCard(row) {
  const article = document.createElement("article");
  article.className = "encoding-card";

  const heading = document.createElement("h2");
  heading.textContent = row.title;

  const pre = document.createElement("pre");
  pre.textContent = row.value || "-";

  article.append(heading, pre);
  return article;
}

function renderRows(rows) {
  output.replaceChildren(...rows.map(createCard));
}

function convert() {
  const value = input.value;
  const trimmed = value.trim();
  const decodedBytes = base64ToBytes(trimmed);

  if (!trimmed) {
    renderRows([]);
    status.textContent = message("결과가 여기에 표시됩니다.");
    return;
  }

  const rows = [];
  for (const encoding of encodings) {
    const textBytes = encodeBytes(value, encoding.value);
    if (textBytes) {
      rows.push({
        title: `${encoding.label} ${message("텍스트 to Base64")}`,
        value: bytesToBase64(textBytes),
      });
      rows.push({
        title: `${encoding.label} ${message("바이트")}`,
        value: bytesToHex(textBytes),
      });
    } else {
      rows.push({
        title: `${encoding.label} ${message("텍스트 to Base64")}`,
        value: message("이 브라우저에서는 해당 인코딩을 지원하지 않습니다."),
      });
    }

    if (decodedBytes) {
      rows.push({
        title: `${encoding.label} ${message("Base64 디코딩")}`,
        value: decodeBytes(decodedBytes, encoding.value),
      });
    }
  }

  renderRows(rows);
  status.textContent = decodedBytes
    ? message("Base64로 감지되어 인코딩별 디코딩 결과도 표시했습니다.")
    : message("입력값을 인코딩별 Base64 결과로 변환했습니다.");
}

const textSamples = {
  ko: "안녕하세요 Web-Tool.Shop",
  en: "Hello Web-Tool.Shop",
  ja: "こんにちは Web-Tool.Shop",
  zh: "你好 Web-Tool.Shop",
};

const base64Samples = {
  ko: "7JWI64WV7ZWY7IS47JqUIFdlYi1Ub29sLlNob3A=",
  en: "SGVsbG8gV2ViLVRvb2wuU2hvcA==",
  ja: "44GT44KT44Gr44Gh44GvIFdlYi1Ub29sLlNob3A=",
  zh: "5L2g5aW9IFdlYi1Ub29sLlNob3A=",
};

sampleTextButton.addEventListener("click", () => {
  input.value = localizedSample(textSamples);
  convert();
  input.focus();
});

sampleBase64Button.addEventListener("click", () => {
  input.value = localizedSample(base64Samples);
  convert();
  input.focus();
});

clearButton.addEventListener("click", () => {
  input.value = "";
  renderRows([]);
  status.textContent = message("결과가 여기에 표시됩니다.");
});

input.addEventListener("input", convert);
sampleTextButton.click();
