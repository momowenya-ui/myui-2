"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/contexts/LangContext";

const PHOTOS = [
  { src: "/photos/Prague-1.jpg", rotate: -2,   top: 0,   left: 0   },
  { src: "/photos/Prague-2.jpg", rotate: 2.5,  top: 30,  left: 160 },
  { src: "/photos/Prague-4.jpg", rotate: -1.5, top: 10,  left: 330 },
  { src: "/photos/Prague-6.jpg", rotate: 3,    top: 200, left: 60  },
  { src: "/photos/Prague-7.jpg", rotate: -2.5, top: 220, left: 260 },
];

function PhotoWall() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div
      className="photo-wall"
      style={{ position: "relative", height: 480, marginTop: 32 }}
    >
      {PHOTOS.map((photo, i) => (
        <div
          key={i}
          className="photo-wall-item"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "absolute",
            top: photo.top,
            left: photo.left,
            width: 160,
            height: 200,
            border: "4px solid #ffffff",
            boxShadow: "2px 4px 16px rgba(0,0,0,0.15)",
            borderRadius: 4,
            overflow: "hidden",
            transform: `rotate(${photo.rotate}deg) scale(${hovered === i ? 1.05 : 1})`,
            transition: "transform 0.25s ease, z-index 0s",
            zIndex: hovered === i ? 10 : i + 1,
            cursor: "pointer",
          }}
        >
          <Image
            src={photo.src}
            alt={`photo-${i + 1}`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="180px"
          />
        </div>
      ))}
    </div>
  );
}

const TAGS = [
  "品牌策略 · Brand Strategy",
  "跨文化市场营销 · Cross-cultural Marketing",
  "KOL 内容策略 · Influencer & KOL Strategy",
  "系统化思维 · Systems Thinking",
  "消费者洞察 · Consumer Insight",
  "创意方向把控 · Creative Direction",
  "团队管理 · Team Management",
  "项目统筹 · Project Operations",
];

const SECTIONS = {
  zh: [
    {
      label: "行业视角",
      paras: [
        "我的背景横跨品牌策略、跨文化传播与创业实践。我亲历了中国制造业从传统贸易到 DTC 出海的整个转型周期——从亚马逊到 Shopify 独立站生态，从跨境支付到 BNPL 的普及，这是属于中国供应链伙伴的历史性机会，也让我深刻理解：出海不只是渠道的延伸，而是一次完整的市场重建。",
        "真正的国际化，需要读懂不同国家消费者的行为逻辑，有时甚至需要重新定义市场规则。我认同一个理念：消费者不是在购买产品，而是在雇佣一个产品来完成某项任务。产品会脱离功能本身，赋能情绪价值与社会认同——这正是优秀出海品牌需要建立的结构化思维。",
        "在快速变动的市场里，我越来越认同市场敏捷性的重要：清晰的目标、跨职能协作的团队、快速试错的执行节奏。这需要 leadership 层面的真正支持，以及团队在竞争中保持持续迭代的能力。",
      ],
    },
    {
      label: "创业经历",
      paras: [
        "2021年，我创立了品牌 Thinla，一个专注于跨境出海的 KOL 营销平台。",
        "品牌视觉是认真做的。从零开始设计 logo，搭建品牌体系，再把它推向市场。这个过程让我第一次完整地经历了一件事：审美是可以被系统化的，用户行为是可以被理解的，商业逻辑是可以被设计的。",
        "最难的一关，是让客户明白我们在做什么。跨境出海的 KOL 营销平台化，在那个时候还是一个新事物，创新本身就是这件事最大的魅力所在。",
        "直到 2025 年公司被收购，这一段故事有了一个结尾。未来也许更有意思的事情，还在前面。",
      ],
    },
    {
      label: "欧洲游历",
      paras: [
        "2024 年底，我来到雅典读研。但雅典只是一个起点。",
        `这一年多，我走过了意大利的罗马、梵蒂冈、佛罗伦萨，站在斗兽场前感受两千年的重量，在圣母百花大教堂看见文艺复兴如何把美变成一种信仰。然后去了西班牙，在巴塞罗那看高迪——圣家堂和巴特罗之家，让我第一次真正理解什么叫"建筑也有生命"。布拉格的老城广场和查理大桥，让我发现时间在有些地方真的走得慢一些。`,
        "接下来我会去慕尼黑，然后又沿着法国南部走，里昂、阿维尼翁，再到马赛，在马赛会参加一场关于市场管理学的研讨会。我期待每一段旅行带给我的惊喜，在一个完全陌生的城市，和来自不同国家的人讨论同一个行业，我突然意识到，市场这件事是真的没有边界的。",
        "走过这些地方，我开始真正理解，不同地方的人关心的事情真的不一样。这不是一句废话，而是一件需要亲身感受才能懂得的事。",
      ],
    },
  ],
  en: [
    {
      label: "Perspective",
      paras: [
        "My background spans brand strategy, cross-cultural communication, and entrepreneurial practice. I lived through China's full shift from traditional trade to DTC global expansion — from Amazon to Shopify ecosystems, from cross-border payments to the rise of BNPL. This transformation taught me that going global isn't just a channel decision. It's a full market rebuild.",
        "Real internationalization means understanding how consumers in different countries think — and sometimes redefining the rules entirely. I believe consumers don't buy products; they hire a product to get a job done. A great product transcends its function to deliver emotional resonance and social identity. That's the structural thinking every serious global brand needs.",
        "In fast-moving markets, I've come to believe deeply in marketing agility: clear objectives, cross-functional teams, and a culture of rapid iteration. This requires genuine leadership support and the organizational ability to keep learning faster than the competition.",
      ],
    },
    {
      label: "Founder",
      paras: [
        "In 2021, I created Thinla — a KOL marketing platform focused on helping Chinese brands expand globally.",
        "The brand identity was built with care. We designed the logo from scratch, built the entire brand system, then took it to market. That process gave me my first complete experience of something I now believe deeply: aesthetics can be systematized, user behavior can be understood, and business logic can be designed.",
        "The hardest part was helping clients understand what we were doing. Platformized KOL marketing for cross-border expansion was still a new concept at the time. That's exactly what made it worth doing.",
        "In 2025, the company was acquired. One chapter closed. Whatever comes next might be even more interesting.",
      ],
    },
    {
      label: "Europe",
      paras: [
        "I came to Athens in late 2024 to study. But Athens was just the beginning.",
        "Over the past year, I've walked through Rome, Vatican City, and Florence — stood in front of the Colosseum and felt two thousand years of weight, and saw in the Cathedral of Santa Maria del Fiore how the Renaissance turned beauty into something sacred. In Barcelona, Gaudí's Sagrada Família and Casa Batlló made me understand for the first time what it means for architecture to breathe. In Prague, the Old Town Square and Charles Bridge showed me that time really does move slower in some places.",
        "Next I'll be heading to Munich, then through the south of France — Lyon, Avignon, and on to Marseille, where I'll be attending a marketing management seminar. I look forward to what each new place brings. Sitting in a city I barely know, discussing the same industry with people from completely different countries, I realized that marketing genuinely has no borders.",
        "Walking through all these places, I started to understand that people in different corners of the world genuinely care about different things. That's not a platitude. It's something you can only really know by being there.",
      ],
    },
  ],
};

const TAGS_NOTE = {
  zh: "目前就读于雅典工商管理学院，市场营销研究生在读。",
  en: "Currently pursuing an MSc in Marketing at ALBA Graduate Business School, Athens.",
};

export default function ProfileSection() {
  const { lang } = useLang();
  const sections = SECTIONS[lang];

  return (
    <section
      id="profile"
      className="profile-section"
      style={{ padding: "100px 10%", background: "#F5F2EC" }}
    >
      <div
        className="profile-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "55% 40%",
          gap: "5%",
          alignItems: "flex-start",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* 左栏：三段叙事 */}
        <div>
          {/* 小标题 */}
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
            我的简介 Profile
          </div>

          {/* 大标题 */}
          <div
            style={{
              fontSize: "1.6rem",
              fontFamily: "serif",
              lineHeight: 1.5,
              color: "#2C2420",
              marginBottom: 44,
            }}
          >
            {lang === "zh"
              ? "我是一个用系统思考，用故事感受的市场人。"
              : "I think in systems. I feel in stories."}
          </div>

          {/* 三段内容 */}
          {sections.map((section, si) => (
            <div key={si}>
              {/* 段落间分隔线（第一段前不加） */}
              {si > 0 && (
                <div style={{ borderTop: "1px solid #DDD8CF", margin: "40px 0" }} />
              )}

              {/* 段落小标题 */}
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  color: "#C4714A",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {section.label}
              </div>

              {/* 段落正文 */}
              {section.paras.map((para, pi) => (
                <p
                  key={pi}
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.9,
                    color: "#4a4744",
                    marginBottom: pi < section.paras.length - 1 ? 20 : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* 右栏：技能标签 + 说明 */}
        <div style={{ background: "#F2EEE8", borderRadius: "12px", padding: "32px" }}>
          <div style={{ marginBottom: 28 }}>
            {TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid #C4714A",
                  color: "#C4714A",
                  padding: "8px 20px",
                  borderRadius: 20,
                  fontSize: "0.9rem",
                  display: "inline-block",
                  margin: 6,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #E8E4DC", marginBottom: 24 }} />

          <p style={{ fontSize: "0.95rem", color: "#6b6864", lineHeight: 1.8, margin: 0 }}>
            {TAGS_NOTE[lang]}
          </p>

          <PhotoWall />
        </div>
      </div>
    </section>
  );
}
