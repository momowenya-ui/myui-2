"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import NavBar from "@/app/components/NavBar";

type CaseItem = {
  id: string;
  logo: string;
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  body: { zh: string[]; en: string[] };
};

const CASES: CaseItem[] = [
  {
    id: "bambulab",
    logo: "/bambulab.jpg",
    title: {
      zh: "拓竹科技 · KOL 营销出海 · 3D 打印",
      en: "Bambu Lab · KOL Marketing · 3D Printing",
    },
    summary: {
      zh: "通过 YouTube 极客社区内容策略，帮助深圳新兴品牌快速打入欧美市场",
      en: "Helped an emerging Shenzhen brand break into Western markets through YouTube creator communities",
    },
    body: {
      zh: [
        "拓竹科技是深圳一家新兴 3D 打印品牌，产品技术领先，但在欧美市场几乎没有知名度。他们需要快速打入极客和创客群体，建立真实的品牌认知。",
        "我们为拓竹制定了一套针对 YouTube 平台的连载内容策略，按产品系列和功能卖点，与大量极客、玩家类 KOL 深度合作，持续输出真实的使用体验内容。同时以耗材和配件作为合作资源，降低合作门槛，吸引更多垂直领域创作者加入。",
        "策略落地后，品牌在 YouTube 上的曝光量快速增长，大量高质量视频在极客社区广泛传播，不仅带动了销售增长，也让拓竹在行业爱好者中建立了真实的好感度和口碑。如今拓竹已成为欧美 3D 打印市场增长最快的品牌之一。",
      ],
      en: [
        "Bambu Lab was an emerging Shenzhen-based 3D printing brand with strong technology but virtually no presence in Western markets. The challenge: break into the geek and maker community fast, and build genuine brand recognition from scratch.",
        "We developed a serialized YouTube content strategy — partnering deeply with geek and hobbyist creators around specific product lines and features, supplying filament and accessories to lower the barrier to collaboration and attract a wide range of niche creators.",
        "The result was rapid growth in brand visibility across YouTube and maker communities. High-quality creator content spread organically through the enthusiast ecosystem, driving both sales and brand affinity. Bambu Lab has since become one of the fastest-growing 3D printing brands in Western markets.",
      ],
    },
  },
  {
    id: "elfbar",
    logo: "/elfbar.jpg",
    title: {
      zh: "ELF BAR · 社交媒体 UGC 内容营销 · 电子烟",
      en: "ELF BAR · UGC & Lifestyle Content Marketing · Vaping",
    },
    summary: {
      zh: "在推广政策受限的市场环境下，以生活方式 UGC 内容突破传播瓶颈",
      en: "Breaking through advertising restrictions with authentic lifestyle UGC across global markets",
    },
    body: {
      zh: [
        "电子烟行业在国际市场竞争激烈，但各国推广政策限制严格，传统广告渠道受阻。ELF BAR 需要一种既能绕开平台限制、又能真实触达目标用户的推广方式。",
        "我们以 UGC 为核心策略，合作大量时尚生活方式类 KOL，将产品自然融入日常内容，而非硬广形式。ELF BAR 本身的设计感和易用性让创作者真心喜爱，愿意主动分享，内容因此呈现出高度真实的质感。配合各平台短视频的传播机制，品牌内容在多个国家快速扩散。",
        "这套策略让 ELF BAR 在政策受限的市场环境中突破传播瓶颈，赢得了大批消费者的品牌好感，成为全球增长最快的电子烟品牌之一。",
      ],
      en: [
        "The international vaping market is highly competitive, and advertising restrictions vary widely across countries — making traditional paid promotion unreliable. ELF BAR needed a way to reach target audiences authentically, without relying on conventional ad channels.",
        "We built a UGC-led strategy, partnering with lifestyle creators who naturally wove the product into their daily content — not as hard ads, but as genuine recommendations. ELF BAR's standout design and ease of use earned real affection from creators, resulting in content that felt authentic and resonated deeply with audiences. Combined with short-video distribution across platforms, the brand spread rapidly across multiple markets.",
        "The campaign helped ELF BAR break through in policy-restricted environments, building strong brand affinity and contributing to its growth as one of the fastest-growing vaping brands globally.",
      ],
    },
  },
  {
    id: "iflytek",
    logo: "/iflytek.jpg",
    title: {
      zh: "科大讯飞 · 智能硬件出海整合营销 · AI 硬件",
      en: "iFLYTEK · Smart Hardware Global Launch · AI Hardware",
    },
    summary: {
      zh: "线上 KOL 测评与线下展会联动，帮助中国 AI 硬件品牌建立海外真实认知",
      en: "Online creator reviews combined with trade show presence to establish global credibility for Chinese AI hardware",
    },
    body: {
      zh: [
        "科大讯飞是中国领先的 AI 技术企业，2024 年开始将 AI 翻译机、AI 录音笔等智能硬件产品推向欧美市场。作为技术型品牌，如何让海外消费者真正理解产品价值，是出海最核心的挑战。",
        "我们采用线上线下同步触达的策略：线上与科技测评类 KOL 深度合作，通过详细的产品体验内容让目标用户直观感受产品能力；线下同步参加海外科技展会，建立品牌在行业内的真实存在感。两条线相互呼应，形成持续的品牌声量。",
        "这次合作让科大讯飞的产品在海外科技社区获得了真实认可。对我们来说，这也是做跨文化营销最骄傲的事之一，让世界看见中国科技真正的实力。",
      ],
      en: [
        "iFLYTEK is one of China's leading AI technology companies. In 2024, they began expanding their smart hardware products — including AI translators and AI voice recorders — into Western markets. As a deeply technical brand, the core challenge was helping international consumers understand and trust the product's capabilities.",
        "We executed a dual-channel strategy: online, we partnered with tech reviewers and creators for in-depth product experience content that made the value tangible; offline, we supported presence at international trade shows to establish real-world credibility in the industry. The two channels reinforced each other, building sustained brand awareness.",
        "The campaign earned genuine recognition for iFLYTEK in overseas tech communities. For us, it was one of the most meaningful things we've done — helping the world see what Chinese technology is truly capable of.",
      ],
    },
  },
];

function CaseCard({ c, lang }: { c: CaseItem; lang: "zh" | "en" }) {
  const [open, setOpen] = useState(false);
  const title = c.title[lang];
  const summary = c.summary[lang];
  const paras = c.body[lang];

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E4DC",
        borderRadius: "12px",
        marginBottom: "16px",
        overflow: "hidden",
        transition: "box-shadow 0.2s",
      }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "28px 32px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 100,
            height: 56,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={c.logo}
            alt={title}
            width={100}
            height={56}
            style={{ objectFit: "contain", maxHeight: 56 }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#2C2420",
              marginBottom: 6,
              lineHeight: 1.4,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: "0.9rem", color: "#4a4744", lineHeight: 1.6 }}>
            {summary}
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            flexShrink: 0,
            fontSize: "1.1rem",
            color: "#9a9590",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            marginLeft: 8,
          }}
        >
          ↓
        </div>
      </button>

      {/* Expanded body */}
      {open && (
        <div
          style={{
            padding: "0 32px 32px 32px",
            borderTop: "1px solid #E8E4DC",
            background: "#F2EEE8",
          }}
        >
          <div style={{ paddingTop: 24 }}>
            {paras.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "#4a4744",
                  marginBottom: i < paras.length - 1 ? 20 : 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CasesPage() {
  const { lang } = useLang();

  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F4" }}>
      <NavBar />

      <div style={{ padding: "80px 10%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* 页面标题区 */}
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "#9a9590",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            CASES
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              fontFamily: "serif",
              color: "#2C2420",
              lineHeight: 1.4,
            }}
          >
            品牌案例 Brand Cases
          </div>
        </div>

        {/* 案例卡片 */}
        <div style={{ maxWidth: 860 }}>
          {CASES.map((c) => (
            <CaseCard key={c.id} c={c} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
