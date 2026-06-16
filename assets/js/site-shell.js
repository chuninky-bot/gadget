(function () {
  const navItems = [
    { href: "/tools/text/", label: "텍스트" },
    { href: "/tools/converter/", label: "자료형 변환" },
    { href: "/tools/diff/", label: "비교하기" },
    { href: "/tools/design/", label: "디자인" },
    { href: "/tools/css-art/", label: "CSS-ART" },
  ];

  function withLocale(href) {
    const locale = new URLSearchParams(window.location.search).get("locale");
    if (!locale) return href;
    const url = new URL(href, window.location.origin);
    url.searchParams.set("locale", locale);
    return `${url.pathname}${url.search}`;
  }

  function renderHeader() {
    const header = document.createElement("header");
    header.className = "site-header";

    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = withLocale("/");
    brand.setAttribute("aria-label", "Web-Tool.Shop 홈");
    brand.textContent = "Web-Tool.Shop";

    const nav = document.createElement("nav");
    nav.className = "nav";
    nav.setAttribute("aria-label", "주요 메뉴");

    const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
    for (const item of navItems) {
      const link = document.createElement("a");
      link.href = withLocale(item.href);
      link.textContent = item.label;
      if (currentPath.startsWith(item.href)) link.setAttribute("aria-current", "page");
      nav.append(link);
    }

    header.append(brand, nav);
    return header;
  }

  function renderFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";

    const privacy = document.createElement("a");
    privacy.href = withLocale("/privacy.html");
    privacy.textContent = "개인정보처리방침";

    const note = document.createElement("span");
    note.textContent = "All tools run in your browser.";

    footer.append(privacy, note);
    return footer;
  }

  function installShell() {
    const existingHeader = document.querySelector(".site-header");
    const header = renderHeader();
    if (existingHeader) existingHeader.replaceWith(header);
    else document.body.prepend(header);

    const existingFooter = document.querySelector(".site-footer");
    const footer = renderFooter();
    if (existingFooter) existingFooter.replaceWith(footer);
    else document.body.append(footer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installShell, { once: true });
  } else {
    installShell();
  }
})();
