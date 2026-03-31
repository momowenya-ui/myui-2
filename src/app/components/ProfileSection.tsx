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

const BODY = {
  zh: {
    paras: [
      "我的背景横跨品牌策略、跨文化传播与创业实践。我从零搭建过推广体系、主导过完整的品牌叙事，也带领过20人团队从商业模式搭建到落地执行的全过程。",
      "我亲历了中国制造业从传统贸易到DTC出海的整个转型周期。从亚马逊到Shopify独立站生态，随之而来的Shoplazza、Shopline，再到店小蜜等ERP系统的兴起，从全球物流网络的成熟到跨境支付、空中云汇，再到BNPL支付业务的普及，这是属于中国供应链伙伴的历史性机会，也让我深刻理解：出海不只是渠道的延伸，而是一次完整的市场重建。",
      "真正的国际化，需要清晰的目标、市场scope以及定义自己的优势，需要读懂不同国家消费者的行为逻辑，有时甚至需要重新定义市场，定义规则。我认同一个理念：消费者不是在购买产品，而是在雇佣一个产品来完成某项任务。因此产品会脱离功能本身，赋能情绪价值与社会认同，这正是优秀出海品牌需要建立的结构化思维。",
      "我擅长在复杂的跨文化语境里找到品牌的正确声音，理解不同市场的消费逻辑，制定有针对性的内容与传播策略，并带队完整实施。",
      "在快速变动的市场里，我越来越认同市场敏捷性的重要：有清晰的目标，有跨职能协作的团队，有快速试错的执行节奏。这需要leadership层面的真正支持，员工的多技能发展，以及团队在充满竞争的市场中保持持续迭代的能力。",
      "我在朝着一个能掌握全局的角色走：策略、声音、方向，不只是执行，而是决策。我想打造对人真正有意义的品牌，用一种与我自己一致的方式。",
    ],
  },
  en: {
    paras: [
      "My background spans brand strategy, cross-cultural communication, and entrepreneurial practice. I've built marketing systems from scratch, led complete brand narratives, and managed a 20-person team through every stage — from business model to execution.",
      "I lived through China's full transformation from traditional manufacturing trade to DTC global expansion. From Amazon to Shopify-based independent store ecosystems, to the rise of platforms like Shoplazza, Shopline, and ERP systems like DiaoXiaoMi, to the maturation of global logistics networks, cross-border payments, and the widespread adoption of BNPL — this has been a defining opportunity for Chinese supply chain businesses, and it taught me that going global isn't just a channel decision. It's a full market rebuild.",
      "Real internationalization requires clarity of goals, market scope, and a clear sense of your own competitive advantage. It means understanding consumer behavior across different countries, and sometimes being willing to redefine the market — and the rules. I believe in one core idea: consumers don't buy products, they hire a product to get a job done. That means a great product transcends its functional value to deliver emotional resonance and social identity — and that's the structural thinking every serious global brand needs to build.",
      "I specialize in finding the right brand voice across complex cultural contexts — understanding how different markets think, building targeted content and communication strategies, and leading teams to deliver end-to-end.",
      "In fast-moving markets, I've come to deeply believe in marketing agility: clear objectives, cross-functional collaboration, and a culture of rapid iteration. This requires genuine leadership support, multi-skilled team members, and the organizational ability to keep iterating faster than the competition.",
      "I'm moving toward a role where I can own the full picture: strategy, voice, direction — not just execution, but decision-making. I want to build brands that genuinely matter to people, in a way that stays true to who I am.",
    ],
  },
};

export default function ProfileSection() {
  const { lang } = useLang();
  const t = BODY[lang];

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
          gridTemplateColumns: "40% 55%",
          gap: "5%",
          alignItems: "flex-start",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* 左栏 */}
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
              marginBottom: 32,
            }}
          >
            {lang === "zh"
              ? "我是一个用系统思考，用故事感受的市场人。"
              : "I think in systems. I feel in stories."}
          </div>

          {/* 正文：随语言切换 */}
          {t.paras.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#4a4744",
                marginBottom: i < t.paras.length - 1 ? 24 : 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* 右栏 */}
        <div style={{ background: "#F2EEE8", borderRadius: "12px", padding: "32px" }}>
          {/* 技能标签：始终双语，不切换 */}
          <div style={{ marginBottom: 24 }}>
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

          <div style={{ borderTop: "1px solid #E8E4DC", margin: "32px 0" }} />

          <div style={{ fontSize: "1rem", color: "#4a4744", lineHeight: 1.8 }}>
            <div style={{ marginBottom: 12, fontWeight: 600 }}>
              {lang === "zh" ? "语言" : "Languages"}
            </div>
            <div style={{ marginBottom: 24 }}>
              {lang === "zh" ? "中文（母语）· 英文（工作语言）" : "Mandarin (Native) · English (Professional)"}
            </div>

            <div style={{ marginBottom: 12, fontWeight: 600 }}>
              {lang === "zh" ? "教育背景" : "Education"}
            </div>
            <div style={{ marginBottom: 24 }}>
              {/* MSc — 第一条，无上边线 */}
              <div style={{ padding: "16px 0" }}>
                MSc in Marketing · ALBA Graduate Business School, The American College of Greece · 2025–2026 · Athens
              </div>
              <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                BSc in Applied Physics · Hunan Institute of Engineering · 2009–2013
              </div>
            </div>

            <div style={{ marginBottom: 12, fontWeight: 600 }}>
              {lang === "zh" ? "工作经历" : "Experience"}
            </div>
            <div>
              {lang === "zh" ? (
                <>
                  {/* Thinla Global — 第一条，无上边线 */}
                  <div style={{ padding: "16px 0" }}>
                    <div style={{ marginBottom: 4 }}>首席运营官兼联合创始人 · Thinla Global · 2021–2025 · 深圳</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864", marginBottom: 6 }}>
                      从零创立并主导公司全面运营：搭建商业模式与业务流程，管理20人跨职能团队，负责客户项目全程推进。同时把控公司整体品牌策略，带队服务超过10个出海品牌客户，覆盖美妆、消费电子等品类，在市场上建立了真实的品牌口碑与行业认可度。
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864", fontStyle: "italic", marginBottom: 4 }}>
                      Thinla Global 是我联合创办的一家专注于中国品牌出海的营销机构，帮助客户进入东南亚及中东市场，提供品牌定位、内容策略与 KOL 推广服务。
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864", fontStyle: "italic" }}>
                      2025年，Thinla Global 获得投资方认可并完成收购。
                    </div>
                  </div>
                  {/* ProitAV */}
                  <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                    <div style={{ marginBottom: 4 }}>数字营销专家 · ProitAV · 2015–2019 · 深圳</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864" }}>
                      负责品牌海外推广与内容运营，管理多平台社交媒体账号及 KOL 合作。
                    </div>
                  </div>
                  {/* Al Hasoun */}
                  <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                    <div style={{ marginBottom: 4 }}>业务拓展主管 · Al Hasoun Arabian Group · 2014–2015 · 迪拜</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864" }}>
                      负责中东市场业务拓展，积累跨文化商务沟通与客户关系管理经验。
                    </div>
                  </div>
                  {/* ZTE */}
                  <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                    <div style={{ marginBottom: 4 }}>市场专员 · 中兴通讯 · 2013–2014 · 深圳</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864" }}>
                      支持市场部日常运营，参与产品推广材料制作与活动执行。
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Thinla Global — 第一条，无上边线 */}
                  <div style={{ padding: "16px 0" }}>
                    <div style={{ marginBottom: 4 }}>COO & Co-Founder · Thinla Global · 2021–2025 · Shenzhen</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864", marginBottom: 6 }}>
                      Co-founded and led the full operations of Thinla Global — building the business model, establishing operational processes, and managing a cross-functional team of 20. Oversaw overall brand strategy while leading client work for 10+ brands expanding into overseas markets across beauty, consumer electronics, and lifestyle. Built genuine market recognition and industry reputation from the ground up.
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864", fontStyle: "italic", marginBottom: 4 }}>
                      Thinla Global was a marketing agency I co-founded, helping Chinese brands expand into Southeast Asian and Middle Eastern markets — covering brand positioning, content strategy, and influencer marketing.
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864", fontStyle: "italic" }}>
                      In 2025, Thinla Global was acquired, recognized by investors for its market value and brand equity built.
                    </div>
                  </div>
                  {/* ProitAV */}
                  <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                    <div style={{ marginBottom: 4 }}>Digital Marketing Specialist · ProitAV · 2015–2019 · Shenzhen</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864" }}>
                      Managed overseas brand promotion and multi-platform social media, including influencer partnerships.
                    </div>
                  </div>
                  {/* Al Hasoun */}
                  <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                    <div style={{ marginBottom: 4 }}>Business Development Executive · Al Hasoun Arabian Group · 2014–2015 · Dubai</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864" }}>
                      Developed new business in the Middle East market, gaining hands-on experience in cross-cultural communication.
                    </div>
                  </div>
                  {/* ZTE */}
                  <div style={{ padding: "16px 0", borderTop: "0.5px solid #E8E4DC" }}>
                    <div style={{ marginBottom: 4 }}>Marketing Assistant · ZTE Corporation · 2013–2014 · Shenzhen</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b6864" }}>
                      Supported day-to-day marketing operations, contributing to product promotion and event execution.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
