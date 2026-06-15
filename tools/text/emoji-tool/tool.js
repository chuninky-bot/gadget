const search = document.querySelector("#emoji-search");
const popularGrid = document.querySelector("#popular-emojis");
const grid = document.querySelector("#emoji-grid");
const status = document.querySelector("#emoji-status");
const popular = ["😀", "😂", "😍", "🥰", "😊", "👍", "🙏", "👏", "🔥", "✨", "🎉", "❤️", "💙", "✅", "⭐", "🚀", "💡", "📌", "⚠️", "❌"];
const all = [
  ["😀", "grinning smile happy face"], ["😃", "smile happy face"], ["😄", "laugh smile"], ["😁", "grin"], ["😆", "laugh"], ["😅", "sweat smile"], ["😂", "joy tears laugh"], ["🤣", "rofl laugh"], ["😊", "blush smile"], ["😇", "angel"],
  ["🙂", "slight smile"], ["😉", "wink"], ["😍", "heart eyes love"], ["😘", "kiss love"], ["😎", "cool sunglasses"], ["🤔", "think"], ["🤯", "mind blown"], ["😢", "sad cry"], ["😭", "cry tears"], ["😡", "angry"],
  ["👍", "thumbs up like"], ["👎", "thumbs down"], ["👏", "clap"], ["🙏", "pray thanks"], ["💪", "strong muscle"], ["👀", "eyes"], ["🧠", "brain"], ["❤️", "heart love"], ["🧡", "orange heart"], ["💛", "yellow heart"],
  ["💚", "green heart"], ["💙", "blue heart"], ["💜", "purple heart"], ["🖤", "black heart"], ["✨", "sparkles"], ["⭐", "star"], ["🔥", "fire"], ["🎉", "party"], ["✅", "check done"], ["❌", "x no"],
  ["⚠️", "warning"], ["🚀", "rocket launch"], ["💡", "idea light"], ["📌", "pin"], ["📎", "clip"], ["📅", "calendar"], ["⏰", "alarm time"], ["☕", "coffee"], ["🍕", "pizza food"], ["🍔", "burger food"],
  ["🍜", "noodle food"], ["🍎", "apple fruit"], ["🌈", "rainbow"], ["☀️", "sun"], ["🌙", "moon"], ["☁️", "cloud"], ["⚡", "bolt"], ["💻", "laptop computer"], ["📱", "phone mobile"], ["🔒", "lock security"],
  ["🔑", "key"], ["🛠️", "tool"], ["🎨", "art design"], ["🏆", "trophy"], ["🎯", "target"], ["📈", "chart up"], ["💰", "money"], ["🏠", "home"], ["🚗", "car"], ["✈️", "airplane"],
  ["🌍", "earth world"], ["🇰🇷", "korea flag"], ["🇺🇸", "usa flag"], ["🇯🇵", "japan flag"], ["🇨🇳", "china flag"],
];
let loaded = 0;

function emojiButton(emoji, keywords) {
  const button = document.createElement("button");
  button.className = "emoji-button";
  button.type = "button";
  button.textContent = emoji;
  button.dataset.keywords = keywords || "";
  button.title = "Click to copy";
  button.addEventListener("click", () => navigator.clipboard?.writeText(emoji));
  return button;
}

function renderPopular() {
  popularGrid.replaceChildren(...popular.map((emoji) => emojiButton(emoji, (all.find((item) => item[0] === emoji) || [])[1])));
}

function loadMore() {
  const fragment = document.createDocumentFragment();
  all.slice(loaded, loaded + 24).forEach((item) => fragment.append(emojiButton(item[0], item[1])));
  grid.append(fragment);
  loaded += 24;
  if (loaded < all.length) requestAnimationFrame(loadMore);
  else filter();
}

function filter() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  document.querySelectorAll(".emoji-button").forEach((button) => {
    const show = !query || button.textContent.includes(query) || button.dataset.keywords.includes(query);
    button.hidden = !show;
    if (show) count += 1;
  });
  status.textContent = query ? `${count} emojis found.` : "Click an emoji to copy it to the clipboard.";
}

search.addEventListener("input", filter);
renderPopular();
loadMore();
