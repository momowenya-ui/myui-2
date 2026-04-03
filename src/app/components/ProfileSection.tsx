"use client";

import { useLang } from "@/contexts/LangContext";

// 技能标签始终双语，不切换
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

const CONTENT = {
  zh: {
    headline: "我是一个用系统思考，用故事感受的市场人。",
    tagsNote: "目前就读于雅典工商管理学院，市场营销研究生在读。",
    thinlaTitle: "Thinla",
    thinlaParas: [
      "Thinla 是我和朋友一起创立的品牌营销机构。这个名字我也很喜欢，念起来好听。",
      "品牌视觉是认真做的。紫色为主，黄色点缀，想呈现一种既有潮流感又很温柔的气质。从零开始设计 logo，搭建品牌体系，再把它推向市场。这个过程让我第一次完整地经历了一件事：审美是可以被系统化的，用户行为是可以被理解的，商业逻辑是可以被设计的。",
      "最难的一关，是让客户明白 Thinla 在做什么。跨境出海的 KOL 营销平台化，在那个时候还是一个新事物，创新本身就是这件事最大的魅力所在。",
      "直到 2025 年 Thinla 被收购，这一段故事有了一个结尾。未来也许更有意思的事情，还在前面。",
    ],
    europeTitle: "欧洲",
    europeParas: [
      "2024 年底，我来到雅典读研。但雅典只是一个起点。",
      `这一年多，我走过了意大利的罗马、梵蒂冈、佛罗伦萨，站在斗兽场前感受两千年的重量，在圣母百花大教堂看见文艺复兴如何把美变成一种信仰。然后去了西班牙，在巴塞罗那看高迪——圣家堂和巴特罗之家，让我第一次真正理解什么叫"建筑也有生命"。布拉格的老城广场和查理大桥，让我发现时间在有些地方真的走得慢一些。`,
      "接下来我会去慕尼黑，然后又沿着法国南部走，里昂、阿维尼翁，再到马赛，在马赛会参加一场关于市场管理学的研讨会。我期待每一段旅行带给我的惊喜，在一个完全陌生的城市，和来自不同国家的人讨论同一个行业，我突然意识到，市场这件事是真的没有边界的。",
      "走过这些地方，我开始真正理解，不同地方的人关心的事情真的不一样。这不是一句废话，而是一件需要亲身感受才能懂得的事。",
    ],
  },
  en: {
    headline: "I think in systems. I feel in stories.",
    tagsNote: "Currently pursuing an MSc in Marketing at ALBA Graduate Business School, Athens.",
    thinlaTitle: "Thinla",
    thinlaParas: [
      "Thinla was a brand marketing agency I co-founded with a friend. I've always loved the name — it just sounds right.",
      "The visual identity was something we cared deeply about. Purple as the primary color, yellow as an accent — trendy but gentle. We built it from scratch: designing the logo, establishing the brand system, then taking it to market. That process was the first time I experienced the full arc of something: aesthetics can be systematized, user behavior can be understood, and business logic can be designed.",
      "The hardest part was helping clients understand what we were doing. KOL marketing as a platformized solution for cross-border expansion was still a new concept at the time. That's exactly what made it exciting.",
      "In 2025, Thinla was acquired. One chapter closed. Whatever comes next might be even more interesting.",
    ],
    europeTitle: "Europe",
    europeParas: [
      "I came to Athens in late 2024 to study. But Athens was just the beginning.",
      "Over the past year, I've walked through Rome, Vatican City, and Florence — stood in front of the Colosseum and felt two thousand years of weight, and saw in the Cathedral of Santa Maria del Fiore how the Renaissance turned beauty into something sacred. In Barcelona, Gaudí's Sagrada Família and Casa Batlló made me understand for the first time what it means for architecture to breathe. In Prague, the Old Town Square and Charles Bridge showed me that time really does move slower in some places.",
      "Next I'll be heading to Munich, then through the south of France — Lyon, Avignon, and on to Marseille, where I'll be attending a marketing management seminar. I look forward to what each new place brings. Sitting in a city I barely know, discussing the same industry with people from completely different countries, I realized that marketing genuinely has no borders.",
      "Walking through all these places, I started to understand that people in different corners of the world genuinely care about different things. That's not a platitude. It's something you can only really know by being there.",
    ],
  },
};

const paraStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.9,
  color: "#4a4744",
  marginBottom: 20,
};

export default function ProfileSection() {
  const { lang } = useLang();
  const t = CONTENT[lang];

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
        {/* 左栏：叙事正文 */}
        <div>
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
            我的简介 Profile
          </div>

          {/* 大标题：随语言切换 */}
          <div
            style={{
              fontSize: "1.6rem",
              fontFamily: "serif",
              lineHeight: 1.5,
              color: "#2C2420",
              marginBottom: 40,
            }}
          >
            {t.headline}
          </div>

          {/* 第一段：Thinla 的故事 */}
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
            {t.thinlaTitle}
          </div>
          {t.thinlaParas.map((para, i) => (
            <p key={`thinla-${i}`} style={{ ...paraStyle, marginBottom: i < t.thinlaParas.length - 1 ? 20 : 0 }}>
              {para}
            </p>
          ))}

          {/* 分隔线 */}
          <div style={{ borderTop: "1px solid #DDD8CF", margin: "40px 0" }} />

          {/* 第二段：欧洲游历 */}
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
            {t.europeTitle}
          </div>
          {t.europeParas.map((para, i) => (
            <p key={`europe-${i}`} style={{ ...paraStyle, marginBottom: i < t.europeParas.length - 1 ? 20 : 0 }}>
              {para}
            </p>
          ))}
        </div>

        {/* 右栏：技能标签 + 说明 */}
        <div style={{ background: "#F2EEE8", borderRadius: "12px", padding: "32px" }}>
          {/* 技能标签 */}
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

          {/* 分隔线 */}
          <div style={{ borderTop: "1px solid #E8E4DC", marginBottom: 24 }} />

          {/* 学校说明 */}
          <p style={{ fontSize: "0.95rem", color: "#6b6864", lineHeight: 1.8, margin: 0 }}>
            {t.tagsNote}
          </p>
        </div>
      </div>
    </section>
  );
}
