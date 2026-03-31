"use client";

import { useLang } from "@/contexts/LangContext";

const CONTENT = {
  zh: {
    title: "让我们保持联系",
    subtitle: "欢迎随时联系，无论是合作、交流还是只是打个招呼。",
    status: "目前我在雅典读研，2026年毕业后开放全职机会。现阶段也欢迎品牌策略、跨文化营销相关的顾问合作或项目咨询。",
  },
  en: {
    title: "Let's Keep in Touch",
    subtitle: "I'm always open to interesting conversations.",
    status: "I'm currently completing my MSc in Athens, graduating in 2026. Open to full-time opportunities after graduation — and available now for consulting or project-based work in brand strategy and cross-cultural marketing.",
  },
};

export default function ConnectSection() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <section
      id="connect"
      className="connect-section"
      style={{ padding: "100px 10%", background: "#F5F2EC" }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        {/* 小标题：始终双语 */}
        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            color: "#9a9590",
            marginBottom: 24,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          联系我 Connect
        </div>

        {/* 大标题：随语言切换 */}
        <div
          style={{ fontSize: "1.8rem", fontFamily: "serif", color: "#2C2420", marginBottom: 16, lineHeight: 1.4 }}
        >
          {t.title}
        </div>

        {/* 副标题：随语言切换 */}
        <div style={{ fontSize: "1rem", color: "#9a9590", marginBottom: 24 }}>
          {t.subtitle}
        </div>

        {/* 目前状态：随语言切换 */}
        <div style={{ fontSize: "0.95rem", color: "#4a4744", lineHeight: 1.8, marginBottom: 48 }}>
          {t.status}
        </div>

        <div style={{ fontSize: "1rem", color: "#2C2420", marginBottom: 16 }}>
          Email:{" "}
          <a
            href="mailto:momowenya@gmail.com"
            style={{ color: "#2C2420", textDecoration: "underline" }}
          >
            momowenya@gmail.com
          </a>
        </div>
        <div style={{ fontSize: "1rem", color: "#2C2420", marginBottom: 32 }}>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/WenQing1001"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2C2420", textDecoration: "underline" }}
          >
            linkedin.com/in/WenQing1001
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: "0.9rem", color: "#9a9590" }}>WhatsApp</div>
          <img
            src="/WhatsApp.jpg"
            alt="WhatsApp QR Code"
            style={{ width: 160, height: "auto", borderRadius: 8 }}
          />
        </div>
      </div>
    </section>
  );
}
