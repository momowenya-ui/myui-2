"use client";

import { useLang } from "@/contexts/LangContext";

type Post = {
  id: string;
  title: string;
  category: string;
  content: string;
  created_at: string;
};

type PostsByCategory = {
  learning: Post[];
  work: Post[];
  things: Post[];
};

const SECTION = {
  zh: { label: "我的日记 JOURNAL" },
  en: { label: "JOURNAL" },
};

const CATEGORIES = {
  learning: {
    zh: { title: "在路上", desc: "读书、旅行、课堂内外—那些让我看见新东西的时刻" },
    en: { title: "On the Road", desc: "Books, travel, and moments that open my eyes to something new" },
  },
  work: {
    zh: { title: "行业观察", desc: "市场、品牌、创业—我对这个行业的观察和思考" },
    en: { title: "Industry Notes", desc: "Marketing, branding, and what I've learned from building things" },
  },
  things: {
    zh: { title: "想到的", desc: "没有固定主题—只是某一刻觉得值得写下来的东西" },
    en: { title: "On Things", desc: "No fixed theme — just things worth writing down" },
  },
};

const EMPTY = { zh: "暂无文章", en: "No posts yet" };
const VIEW_ALL = {
  zh: (n: number) => `查看全部 ${n} 篇 →`,
  en: (n: number) => `View all ${n} posts →`,
};

export default function JournalSection({ postsByCategory }: { postsByCategory: PostsByCategory }) {
  const { lang } = useLang();

  const renderCard = (slug: keyof typeof CATEGORIES, posts: Post[]) => {
    const cat = CATEGORIES[slug][lang];
    const preview = posts.slice(0, 3);

    return (
      <div
        key={slug}
        className="journal-card"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #DDD8CF",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.2s ease",
          cursor: "pointer",
          minHeight: 0,
        }}
      >
        <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#2C2420", marginBottom: 10 }}>
          {cat.title}
        </div>
        <div style={{ fontSize: "1rem", color: "#4a4744", marginBottom: 24 }}>
          {cat.desc}
        </div>

        {posts.length === 0 ? (
          <div style={{ fontSize: "0.85rem", color: "#9a9590", marginTop: 24 }}>
            {EMPTY[lang]}
          </div>
        ) : (
          <>
            <ul style={{ marginTop: 24, padding: 0, listStyle: "none" }}>
              {preview.map((post, idx) => (
                <li
                  key={post.id}
                  style={{
                    borderBottom: idx !== preview.length - 1 ? "1px solid #eee" : "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <a
                    href={`/posts/${post.id}`}
                    style={{ display: "block", padding: "12px 0", cursor: "pointer", textDecoration: "none" }}
                    className="journal-post-link"
                  >
                    <div
                      className="journal-post-title"
                      style={{ fontWeight: 600, color: "#2C2420", fontSize: "1rem", transition: "color 0.2s" }}
                    >
                      {post.title}
                    </div>
                    <div style={{ color: "#9a9590", fontSize: "0.85rem", marginTop: 2 }}>
                      {post.created_at?.slice(0, 10)}
                    </div>
                    <div style={{ color: "#4a4744", fontSize: "0.95rem", marginTop: 2 }}>
                      {post.content?.slice(0, 60)}
                      {post.content && post.content.length > 60 ? "..." : ""}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            {posts.length > 3 && (
              <a
                href={`/journal/category/${slug}`}
                style={{ display: "inline-block", marginTop: 16, fontSize: "0.85rem", color: "#C4714A", textDecoration: "none" }}
              >
                {VIEW_ALL[lang](posts.length)}
              </a>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section
      id="journal"
      style={{ padding: "100px 10%", background: "#FAF8F4" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* 小标题：始终双语 */}
        <div
          style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: "#9a9590", marginBottom: 24, fontWeight: 600 }}
        >
          {SECTION[lang].label}
        </div>

        {/* 副标题：始终不变 */}
        <div style={{ fontSize: "0.9rem", color: "#9a9590", marginBottom: 60 }}>
          On Learning · Industry Notes · On Things
        </div>

        <div
          className="journal-cards-row"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}
        >
          {renderCard("learning", postsByCategory.learning)}
          {renderCard("work", postsByCategory.work)}
          {renderCard("things", postsByCategory.things)}
        </div>
      </div>

      <style>{`
        .journal-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important; }
        .journal-post-title:hover { color: #C4714A !important; }
      `}</style>
    </section>
  );
}
