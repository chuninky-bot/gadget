(function () {
  const STORAGE_KEY = "web-tool-shop-recent-tools";
  const FAVORITES_KEY = "web-tool-shop-favorite-tools";
  const MAX_ITEMS = 10;
  const categoryNames = {
    text: "텍스트",
    converter: "자료형 변환",
    developer: "자료형 변환",
    diff: "비교하기",
    generator: "생성기",
  };
  const labels = {
    ko: { recentTitle: "최근 사용 도구", favoriteTitle: "즐겨찾는 도구", emptyRecent: "아직 사용한 도구가 없습니다.", favorite: "즐겨찾기", unfavorite: "즐겨찾기 해제", remove: "목록에서 삭제" },
    en: { recentTitle: "Recent tools", favoriteTitle: "Favorite tools", emptyRecent: "No recently used tools yet.", favorite: "Add favorite", unfavorite: "Remove favorite", remove: "Remove from list" },
    ja: { recentTitle: "最近使ったツール", favoriteTitle: "お気に入りツール", emptyRecent: "最近使ったツールはまだありません。", favorite: "お気に入りに追加", unfavorite: "お気に入りから削除", remove: "リストから削除" },
    zh: { recentTitle: "最近使用的工具", favoriteTitle: "收藏工具", emptyRecent: "还没有最近使用的工具。", favorite: "添加收藏", unfavorite: "取消收藏", remove: "从列表中删除" },
  };

  function currentLanguage() {
    const stored = localStorage.getItem("gadget-language");
    return labels[stored] ? stored : "ko";
  }

  function readList(key) {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function readItems() {
    return readList(STORAGE_KEY);
  }

  function readFavorites() {
    return readList(FAVORITES_KEY);
  }

  function writeItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
  }

  function writeFavorites(items) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
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

    const heading = document.querySelector("h1");
    const title = Array.from(heading?.childNodes || [])
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .join(" ")
      .trim() || heading?.textContent.trim();
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

  function showCopyToast() {
    const now = Date.now();
    if (showCopyToast.lastShownAt && now - showCopyToast.lastShownAt < 450) return;
    showCopyToast.lastShownAt = now;

    const lang = currentLanguage();
    const messages = {
      ko: "복사되었습니다.",
      en: "Copied.",
      ja: "コピーしました。",
      zh: "已复制。",
    };
    const existing = document.querySelector(".copy-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "copy-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.textContent = messages[lang] || messages.ko;
    document.body.append(toast);

    window.requestAnimationFrame(() => toast.classList.add("is-visible"));
    window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => toast.remove(), 220);
    }, 1400);
  }

  function installCopyFeedback() {
    const clipboard = navigator.clipboard;
    if (!clipboard?.writeText || clipboard.writeText.__copyFeedbackInstalled) return;

    const originalWriteText = clipboard.writeText.bind(clipboard);
    try {
      clipboard.writeText = (text) => {
        const result = originalWriteText(text);
        Promise.resolve(result).then(showCopyToast, () => {});
        return result;
      };
      clipboard.writeText.__copyFeedbackInstalled = true;
    } catch (_) {
      window.showCopyToast = showCopyToast;
    }
  }

  function installCopyButtonFeedback() {
    document.addEventListener("click", (event) => {
      const button = event.target?.closest?.("button");
      if (!button) return;

      const label = button.textContent.trim();
      const isCopyButton = button.id === "copy" || ["복사", "Copy", "コピー", "复制"].includes(label);
      if (!isCopyButton) return;

      window.setTimeout(showCopyToast, 80);
    });
  }

  function copyText(value) {
    if (!value) return;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(showCopyToast, showCopyToast);
      return;
    }

    const helper = document.createElement("textarea");
    helper.value = value;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    showCopyToast();
  }

  function copyableValue(element) {
    if ("value" in element) return element.value;
    return element.textContent || "";
  }

  function installCopyIcons(root = document) {
    const targets = root.querySelectorAll?.("textarea.tool-textarea, .result-panel, .encoding-card pre") || [];
    targets.forEach((target) => {
      if (target.closest(".copy-shell")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "copy-shell";
      target.parentNode.insertBefore(wrapper, target);
      wrapper.append(target);

      const button = document.createElement("button");
      button.className = "copy-icon-button";
      button.type = "button";
      button.textContent = "⧉";
      button.setAttribute("aria-label", "복사");
      button.title = "복사";
      button.addEventListener("click", () => copyText(copyableValue(target)));
      wrapper.append(button);
    });
  }

  function observeCopyTargets() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) installCopyIcons(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function isFavorite(path) {
    return readFavorites().some((item) => item.path === path);
  }

  function removeRecent(path) {
    const next = readItems().filter((item) => item.path !== path);
    writeItems(next);
    renderPanel();
  }

  function toggleFavorite(tool) {
    if (!tool) return;

    const favorites = readFavorites();
    const exists = favorites.some((item) => item.path === tool.path);
    const next = exists ? favorites.filter((item) => item.path !== tool.path) : [tool, ...favorites.filter((item) => item.path !== tool.path)];
    writeFavorites(next);
    renderFavoriteButton(tool);
    renderPanel();
  }

  function renderFavoriteButton(tool) {
    const heading = document.querySelector(".section-heading h1");
    if (!heading || !tool) return;

    const existing = document.querySelector(".favorite-tool-button");
    if (existing) existing.remove();

    const lang = currentLanguage();
    const copy = labels[lang] || labels.ko;
    const active = isFavorite(tool.path);
    const button = document.createElement("button");
    button.className = `favorite-tool-button${active ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = active ? "★" : "☆";
    button.setAttribute("aria-label", active ? copy.unfavorite : copy.favorite);
    button.title = active ? copy.unfavorite : copy.favorite;
    button.addEventListener("click", () => toggleFavorite(tool));
    heading.append(button);
  }

  function createToolList(items, options = {}) {
    const list = document.createElement("ol");
    for (const item of items.slice(0, options.limit || items.length)) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      const category = document.createElement("span");
      const title = document.createElement("strong");

      link.href = linkFor(item.path);
      category.textContent = item.category;
      title.textContent = item.title;
      link.append(category, title);
      li.append(link);

      if (options.removable) {
        const lang = currentLanguage();
        const copy = labels[lang] || labels.ko;
        const removeButton = document.createElement("button");
        removeButton.className = "recent-tool-remove";
        removeButton.type = "button";
        removeButton.textContent = "×";
        removeButton.setAttribute("aria-label", copy.remove);
        removeButton.title = copy.remove;
        removeButton.addEventListener("click", () => removeRecent(item.path));
        li.append(removeButton);
      }

      list.append(li);
    }
    return list;
  }

  function appendSection(panel, title, items, options = {}) {
    if (!items.length && !options.showWhenEmpty) return;

    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = title;
    section.append(heading);

    if (items.length) {
      section.append(createToolList(items, options));
    } else if (options.emptyText) {
      const empty = document.createElement("p");
      empty.className = "recent-tools-empty";
      empty.textContent = options.emptyText;
      section.append(empty);
    }

    panel.append(section);
  }

  function renderPanel(items = readItems()) {
    const existing = document.querySelector(".recent-tools-panel");
    if (existing) existing.remove();

    const lang = currentLanguage();
    const copy = labels[lang] || labels.ko;
    const favorites = readFavorites();
    if (!items.length && !favorites.length) return;

    const panel = document.createElement("aside");
    panel.className = "recent-tools-panel";
    panel.setAttribute("aria-label", `${copy.favoriteTitle}, ${copy.recentTitle}`);

    appendSection(panel, copy.favoriteTitle, favorites);
    appendSection(panel, copy.recentTitle, items, { limit: MAX_ITEMS, removable: true, showWhenEmpty: favorites.length > 0, emptyText: copy.emptyRecent });

    const main = document.querySelector("main");
    if (main) main.after(panel);
    else document.body.append(panel);
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.showCopyToast = showCopyToast;
    installCopyFeedback();
    installCopyButtonFeedback();
    installCopyIcons();
    observeCopyTargets();
    const tool = currentTool();
    const items = trackCurrentTool();
    renderFavoriteButton(tool);
    renderPanel(items);

    document.addEventListener("change", (event) => {
      if (event.target && event.target.id === "language-select") {
        renderFavoriteButton(currentTool());
        renderPanel(readItems());
      }
    });
  });
})();
