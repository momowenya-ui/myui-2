"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{
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

        {/* Hamburger button (mobile only) */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(true)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2C2420",
            fontSize: "1.6rem",
            padding: "4px",
            lineHeight: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay${menuOpen ? " open" : ""}`}>
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "24px",
            right: "10%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2C2420",
            fontSize: "1.8rem",
            lineHeight: 1,
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Brand name */}
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "serif",
            fontSize: "1.2rem",
            color: "#2C2420",
            textDecoration: "none",
            marginBottom: 8,
          }}
        >
          My name is Wen Qing ✦
        </a>

        <div style={{ width: "40px", height: "1px", background: "#DDD8CF", marginBottom: 8 }} />

        {/* Nav links */}
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#2C2420",
              textDecoration: "none",
              fontSize: "1.3rem",
              fontFamily: "serif",
              letterSpacing: "0.02em",
            }}
          >
            {lang === "zh" ? item.zh : item.en}
          </a>
        ))}

        <div style={{ width: "40px", height: "1px", background: "#DDD8CF", marginTop: 8 }} />

        {/* Language toggle */}
        <button
          onClick={() => { toggle(); }}
          style={{
            background: "transparent",
            border: "1px solid #C4714A",
            borderRadius: "20px",
            cursor: "pointer",
            color: "#C4714A",
            fontSize: "0.95rem",
            padding: "8px 24px",
            marginTop: 4,
          }}
        >
          {lang === "zh" ? "中 / EN" : "EN / 中"}
        </button>
      </div>
    </>
  );
}
