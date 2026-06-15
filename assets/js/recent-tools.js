(function () {
  const STORAGE_KEY = "web-tool-shop-recent-tools";
  const MAX_ITEMS = 10;
  const categoryNames = {
    text: "텍스트",
    developer: "개발자",
    generator: "생성기",
  };
  const labels = {
    ko: { title: "최근 사용 도구", empty: "아직 사용한 도구가 없습니다." },
    en: { title: "Recent tools", empty: "No recently used tools yet." },
    ja: { title: "最近使ったツール", empty: "最近使ったツールはまだありません。" },
    zh: { title: "最近使用的工具", empty: "还没有最近使用的工具。" },
  };

  function currentLanguage() {
    const stored = localStorage.getItem("gadget-language");
    return labels[stored] ? stored : "ko";
  }

  function readItems() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function writeItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
  }

  function normalizedPath() {
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    if (canonical) return new URL(canonical).pathname;
    return window.location.pathname.replace(/\/index\.html$/, "/");
  }

  function currentTool() {
    const pathname = normalizedPath();
    const match = pathname.match(/^\/tools\/([^/]+)\/([^/]+)\/$/);
    if (!match) return null;

    const title = document.querySelector("h1")?.textContent.trim();
    if (!title) return null;

    return {
      path: pathname,
      title,
      category: categoryNames[match[1]] || match[1],
      usedAt: Date.now(),
    };
  }

  function trackCurrentTool() {
    const tool = currentTool();
    if (!tool) return readItems();

    const next = [tool, ...readItems().filter((item) => item.path !== tool.path)];
    writeItems(next);
    return next;
  }

  function linkFor(path) {
    if (window.location.protocol === "file:") return path;
    return path;
  }

  function renderPanel(items) {
    const existing = document.querySelector(".recent-tools-panel");
    if (existing) existing.remove();
    if (!items.length) return;

    const lang = currentLanguage();
    const copy = labels[lang] || labels.ko;
    const panel = document.createElement("aside");
    panel.className = "recent-tools-panel";
    panel.setAttribute("aria-label", copy.title);

    const heading = document.createElement("h2");
    heading.textContent = copy.title;
    panel.append(heading);

    const list = document.createElement("ol");
    for (const item of items.slice(0, MAX_ITEMS)) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      const category = document.createElement("span");
      const title = document.createElement("strong");

      link.href = linkFor(item.path);
      category.textContent = item.category;
      title.textContent = item.title;
      link.append(category, title);
      li.append(link);
      list.append(li);
    }
    panel.append(list);

    const main = document.querySelector("main");
    if (main) main.after(panel);
    else document.body.append(panel);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const items = trackCurrentTool();
    renderPanel(items);

    document.addEventListener("change", (event) => {
      if (event.target && event.target.id === "language-select") {
        renderPanel(readItems());
      }
    });
  });
})();
