"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { supabase } from "@/lib/supabase";

const CONTENT = {
  zh: {
    title: "让我们保持联系",
    subtitle: "欢迎随时联系，无论是合作、交流，还是只是打个招呼。",
    status: "目前我在雅典读研，2026年毕业后开放全职机会。现阶段也欢迎品牌策略、跨文化营销相关的顾问合作或项目咨询。",
    namePlaceholder: "姓名",
    emailPlaceholder: "邮箱",
    messagePlaceholder: "留言",
    submit: "发送",
    submitting: "发送中…",
    success: "已收到，我会尽快回复。",
    error: "发送失败，请稍后再试。",
  },
  en: {
    title: "Let's Keep in Touch",
    subtitle: "Always open to a good conversation — whether it's about brand strategy, a project, or just saying hi.",
    status: "I'm currently completing my MSc in Athens, graduating in 2026. Open to full-time opportunities after graduation — and available now for consulting or project-based work in brand strategy and cross-cultural marketing.",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    submit: "Send",
    submitting: "Sending…",
    success: "Received! I'll get back to you soon.",
    error: "Something went wrong. Please try again.",
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "#FFFFFF",
  border: "1px solid #DDD8CF",
  borderRadius: "8px",
  fontSize: "0.95rem",
  color: "#2C2420",
  outline: "none",
  fontFamily: "Georgia, serif",
  lineHeight: 1.6,
};

export default function ConnectSection() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    const { error } = await supabase.from("messages").insert([
      { name, email, message },
    ]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }
  }

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

        {/* 大标题 */}
        <div
          style={{ fontSize: "1.8rem", fontFamily: "serif", color: "#2C2420", marginBottom: 16, lineHeight: 1.4 }}
        >
          {t.title}
        </div>

        {/* 副标题 */}
        <div style={{ fontSize: "1rem", color: "#9a9590", marginBottom: 24 }}>
          {t.subtitle}
        </div>

        {/* 目前状态 */}
        <div style={{ fontSize: "0.95rem", color: "#4a4744", lineHeight: 1.8, marginBottom: 48 }}>
          {t.status}
        </div>

        {/* 联系表单 */}
        {status === "success" ? (
          <div
            style={{
              padding: "24px 32px",
              background: "#FFFFFF",
              border: "1px solid #DDD8CF",
              borderRadius: "12px",
              fontSize: "1rem",
              color: "#4a4744",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            {t.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: "left", marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                required
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <input
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <textarea
                required
                rows={5}
                placeholder={t.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <div style={{ fontSize: "0.9rem", color: "#C4714A", marginBottom: 12 }}>
                {t.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                width: "100%",
                padding: "14px",
                background: status === "submitting" ? "#DDD8CF" : "#2C2420",
                color: "#FAF8F4",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontFamily: "Georgia, serif",
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                letterSpacing: "0.05em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { if (status !== "submitting") e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              {status === "submitting" ? t.submitting : t.submit}
            </button>
          </form>
        )}

        {/* LinkedIn */}
        <div style={{ fontSize: "1rem", color: "#2C2420" }}>
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
      </div>
    </section>
  );
}
