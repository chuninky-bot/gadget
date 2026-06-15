const searchInput = document.querySelector("#tool-search");
const toolCards = [...document.querySelectorAll("[data-tool]")];

if (searchInput && toolCards.length) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    for (const card of toolCards) {
      const haystack = card.dataset.tool.toLowerCase();
      card.dataset.hidden = query && !haystack.includes(query) ? "true" : "false";
    }
  });
}

function copyText(value) {
  if (!value) return;
  navigator.clipboard?.writeText(value);
}
