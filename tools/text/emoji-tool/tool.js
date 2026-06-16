const search = document.querySelector("#emoji-search");
const popularGrid = document.querySelector("#popular-emojis");
const grid = document.querySelector("#emoji-grid");
const status = document.querySelector("#emoji-status");

const popular = ["😀", "😂", "😍", "🥰", "😊", "👍", "🙏", "👏", "🔥", "✨", "🎉", "❤️", "💙", "✅", "⭐", "🚀", "💡", "📌", "⚠️", "❌", "🌈", "☕", "🎨", "💻"];
const emojiEntries = window.emojiToolData?.entries || [];
const pageSize = 160;
const emojiByGlyph = new Map(emojiEntries.map((entry) => [entry.emoji, entry]));

let loaded = 0;
let visibleEntries = emojiEntries;
let renderToken = 0;
let filterTimer = 0;

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueWords(...parts) {
  return [...new Set(parts.join(" ").split(/\s+/).filter(Boolean))].join(" ");
}

function createSearchText(entry) {
  return normalizeSearchText(uniqueWords(
    entry.emoji,
    entry.name,
    entry.group,
    entry.subgroup,
    entry.keywords?.ko,
    entry.keywords?.en,
    entry.keywords?.ja,
    entry.keywords?.zh,
  ));
}

const indexedEntries = emojiEntries.map((entry) => ({
  ...entry,
  searchText: createSearchText(entry),
}));

function findEntry(emoji) {
  return emojiByGlyph.get(emoji);
}

function emojiButton(entry) {
  const button = document.createElement("button");
  button.className = "emoji-button";
  button.type = "button";
  button.textContent = entry.emoji;
  button.dataset.emoji = entry.emoji;
  button.dataset.i18nTitle = "Click to copy";
  button.title = message("Click to copy");
  button.setAttribute("aria-label", `${entry.emoji} ${entry.name}`);
  return button;
}

async function copyEmoji(emoji) {
  await navigator.clipboard?.writeText(emoji);
  status.textContent = `${emoji} ${message("Copied to clipboard.")}`;
}

function handleEmojiClick(event) {
  const button = event.target.closest(".emoji-button");
  if (!button) return;
  copyEmoji(button.dataset.emoji);
}

function renderPopular() {
  const entries = popular.map(findEntry).filter(Boolean);
  popularGrid.replaceChildren(...entries.map(emojiButton));
}

function scheduleChunk(callback) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: 120 });
    return;
  }
  requestAnimationFrame(callback);
}

function renderNextChunk(token) {
  if (token !== renderToken) return;

  const fragment = document.createDocumentFragment();
  const next = visibleEntries.slice(loaded, loaded + pageSize);
  next.forEach((entry) => fragment.append(emojiButton(entry)));
  grid.append(fragment);
  loaded += next.length;

  if (loaded < visibleEntries.length) {
    scheduleChunk(() => renderNextChunk(token));
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

function matchesQuery(entry, tokens) {
  if (!tokens.length) return true;
  return tokens.every((token) => entry.emoji.includes(token) || entry.searchText.includes(token));
}

function applyFilter() {
  const query = normalizeSearchText(search.value);
  const tokens = query ? query.split(" ") : [];
  visibleEntries = tokens.length ? indexedEntries.filter((entry) => matchesQuery(entry, tokens)) : indexedEntries;
  renderVisibleEntries();
}

function scheduleFilter() {
  window.clearTimeout(filterTimer);
  filterTimer = window.setTimeout(applyFilter, 90);
}

function syncLanguageText() {
  document.querySelectorAll(".emoji-button").forEach((button) => {
    button.title = message("Click to copy");
  });
  updateStatus();
}

popularGrid.addEventListener("click", handleEmojiClick);
grid.addEventListener("click", handleEmojiClick);
search.addEventListener("input", scheduleFilter);
window.addEventListener("gadget:languagechange", syncLanguageText);

renderPopular();
applyFilter();
