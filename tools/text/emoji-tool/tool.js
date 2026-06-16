const search = document.querySelector("#emoji-search");
const popularGrid = document.querySelector("#popular-emojis");
const grid = document.querySelector("#emoji-grid");
const status = document.querySelector("#emoji-status");

const popular = ["😀", "😂", "😍", "🥰", "😊", "👍", "🙏", "👏", "🔥", "✨", "🎉", "❤️", "💙", "✅", "⭐", "🚀", "💡", "📌", "⚠️", "❌", "🌈", "☕", "🎨", "💻"];
const emojiEntries = window.emojiToolData?.entries || [];
const pageSize = 320;
let loaded = 0;
let visibleEntries = emojiEntries;
let renderToken = 0;

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[_-]+/g, " ")
    .trim();
}

function entrySearchText(entry) {
  if (entry.searchText) return entry.searchText;
  entry.searchText = normalizeSearchText([
    entry.emoji,
    entry.name,
    entry.group,
    entry.subgroup,
    entry.keywords?.ko,
    entry.keywords?.en,
    entry.keywords?.ja,
    entry.keywords?.zh,
  ].filter(Boolean).join(" "));
  return entry.searchText;
}

function findEntry(emoji) {
  return emojiEntries.find((entry) => entry.emoji === emoji);
}

function emojiButton(entry) {
  const button = document.createElement("button");
  button.className = "emoji-button";
  button.type = "button";
  button.textContent = entry.emoji;
  button.dataset.i18nTitle = "Click to copy";
  button.title = message("Click to copy");
  button.setAttribute("aria-label", `${entry.emoji} ${entry.name}`);
  button.addEventListener("click", async () => {
    await navigator.clipboard?.writeText(entry.emoji);
    status.textContent = `${entry.emoji} ${message("Copied to clipboard.")}`;
  });
  return button;
}

function renderPopular() {
  const entries = popular.map(findEntry).filter(Boolean);
  popularGrid.replaceChildren(...entries.map(emojiButton));
}

function renderNextChunk(token) {
  if (token !== renderToken) return;

  const fragment = document.createDocumentFragment();
  const next = visibleEntries.slice(loaded, loaded + pageSize);
  next.forEach((entry) => fragment.append(emojiButton(entry)));
  grid.append(fragment);
  loaded += next.length;

  if (loaded < visibleEntries.length) {
    requestAnimationFrame(() => renderNextChunk(token));
  } else {
    updateStatus();
  }
}

function updateStatus() {
  const query = normalizeSearchText(search.value);
  if (query) {
    status.textContent = `${visibleEntries.length} ${message("emojis found.")}`;
  } else {
    status.textContent = `${emojiEntries.length} ${message("emojis loaded.")} ${message("Click an emoji to copy it to the clipboard.")}`;
  }
}

function renderVisibleEntries() {
  loaded = 0;
  renderToken += 1;
  grid.replaceChildren();
  renderNextChunk(renderToken);
}

function filter() {
  const query = normalizeSearchText(search.value);
  visibleEntries = query ? emojiEntries.filter((entry) => entry.emoji.includes(query) || entrySearchText(entry).includes(query)) : emojiEntries;

  document.querySelectorAll(".emoji-button").forEach((button) => {
    button.title = message("Click to copy");
  });
  renderVisibleEntries();
}

function syncLanguageText() {
  document.querySelectorAll(".emoji-button").forEach((button) => {
    button.title = message("Click to copy");
  });
  updateStatus();
}

search.addEventListener("input", filter);
window.addEventListener("gadget:languagechange", syncLanguageText);

renderPopular();
filter();
