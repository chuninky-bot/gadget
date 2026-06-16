const input = document.querySelector("#encoding-input");
const output = document.querySelector("#encoding-output");
const status = document.querySelector("#encoding-status");
const sampleButtons = document.querySelectorAll("[data-sample]");
const clearButton = document.querySelector("#clear");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

function utf8Encode(text) {
  return new (window.NativeTextEncoder || TextEncoder)().encode(text);
}

function decodeBytes(bytes, encoding) {
  try {
    return new TextDecoder(encoding, { fatal: false }).decode(bytes);
  } catch (_) {
    return "";
  }
}

function encodeBytes(text, encoding) {
  try {
    return new TextEncoder(encoding, { NONSTANDARD_allowLegacyEncoding: true }).encode(text);
  } catch (_) {
    return null;
  }
}

function parseHex(value) {
  const normalized = value.trim().replace(/\\x/gi, "").replace(/0x/gi, "");
  if (/[^0-9a-f\s,;:_-]/i.test(normalized)) return null;
  const cleaned = normalized
    .replace(/\\x/gi, " ")
    .replace(/0x/gi, " ")
    .replace(/[^0-9a-f]/gi, "");
  if (!cleaned || cleaned.length % 2 !== 0) return null;
  return Uint8Array.from(cleaned.match(/../g).map((part) => parseInt(part, 16)));
}

function parseUrlBytes(value) {
  if (!/%[0-9a-f]{2}/i.test(value)) return null;
  try {
    const normalized = value.replace(/\+/g, "%20");
    const bytes = [];
    for (let index = 0; index < normalized.length; index += 1) {
      if (normalized[index] === "%" && /[0-9a-f]{2}/i.test(normalized.slice(index + 1, index + 3))) {
        bytes.push(parseInt(normalized.slice(index + 1, index + 3), 16));
        index += 2;
      } else {
        bytes.push(...utf8Encode(normalized[index]));
      }
    }
    return Uint8Array.from(bytes);
  } catch (_) {
    return null;
  }
}

function parseBase64Bytes(value) {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length < 4 || trimmed.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(trimmed)) return null;
  try {
    const binary = atob(trimmed);
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
  } catch (_) {
    return null;
  }
}

function uniqueRows(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = `${row.title}\n${row.value}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function createResultCard(row) {
  const article = document.createElement("article");
  article.className = "encoding-card";

  const heading = document.createElement("h2");
  heading.textContent = message(row.title);

  const pre = document.createElement("pre");
  pre.textContent = row.value || "-";

  article.append(heading, pre);
  return article;
}

function readableRowsFromBytes(bytes, sourceLabel) {
  return [
    { title: sourceLabel, value: bytesToHex(bytes) },
    { title: "UTF-8로 읽은 결과", value: decodeBytes(bytes, "utf-8") },
    { title: "EUC-KR로 읽은 결과", value: decodeBytes(bytes, "euc-kr") },
    { title: "ISO-8859-1로 읽은 결과", value: decodeBytes(bytes, "iso-8859-1") },
  ];
}

function convert() {
  const value = input.value.trim();
  if (!value) {
    output.replaceChildren();
    status.textContent = message("결과가 여기에 표시됩니다.");
    return;
  }

  const rows = [];
  const hexBytes = parseHex(value);
  const urlBytes = parseUrlBytes(value);
  const base64Bytes = parseBase64Bytes(value);

  if (hexBytes) rows.push(...readableRowsFromBytes(hexBytes, "HEX 바이트"));
  if (urlBytes) rows.push(...readableRowsFromBytes(urlBytes, "URL 바이트"));
  if (base64Bytes) rows.push(...readableRowsFromBytes(base64Bytes, "Base64 바이트"));

  if (!rows.length) {
    const utf8 = utf8Encode(value);
    const eucKr = encodeBytes(value, "euc-kr");
    rows.push(
      { title: "입력한 문자", value },
      { title: "UTF-8 바이트", value: bytesToHex(utf8) },
    );
    if (eucKr) rows.push({ title: "EUC-KR 바이트", value: bytesToHex(eucKr) });
  }

  output.replaceChildren(...uniqueRows(rows).map(createResultCard));
  status.textContent = message(rows.length ? "읽을 수 있는 문자로 변환했습니다." : "결과가 여기에 표시됩니다.");
}

const samples = {
  utf8: "EC 95 88 EB 85 95",
  "euc-kr": "BE C8 B3 E7",
  hex: "41 50 50 4C 45",
  base64: "QVBQTEU=",
  url: "%EC%95%88%EB%85%95",
};

sampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value = samples[button.dataset.sample] || samples.hex;
    convert();
    input.focus();
  });
});

clearButton.addEventListener("click", () => {
  input.value = "";
  output.replaceChildren();
  status.textContent = message("결과가 여기에 표시됩니다.");
});
input.addEventListener("input", convert);

input.value = samples.hex;
convert();
