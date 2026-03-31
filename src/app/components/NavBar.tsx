"use client";

import { useLang } from "@/contexts/LangContext";

const NAV_ITEMS = [
  { zh: "关于我",   en: "About",   href: "/#about" },
  { zh: "简介",     en: "Profile", href: "/#profile" },
  { zh: "品牌案例", en: "Cases",   href: "/cases" },
  { zh: "我的日记", en: "Journal", href: "/#journal" },
  { zh: "联系我",   en: "Connect", href: "/#connect" },
];

export default function NavBar() {
  const { lang, toggle } = useLang();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 10%",
        position: "sticky",
        top: 0,
        backgroundColor: "#FAF8F4",
        color: "#2C2420",
        zIndex: 100,
      }}
    >
      <a
        href="/"
        style={{ fontFamily: "serif", fontSize: "1.2rem", color: "#2C2420", textDecoration: "none" }}
      >
        My name is Wen Qing ✦
      </a>

      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
          fontSize: "1rem",
          color: "#2C2420",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{ color: "#2C2420", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {lang === "zh" ? item.zh : item.en}
          </a>
        ))}

        <button
          onClick={toggle}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2C2420",
            fontSize: "1rem",
            padding: 0,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {lang === "zh" ? "中 / EN" : "EN / 中"}
        </button>
      </div>
    </nav>
  );
}
