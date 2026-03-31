import { supabase } from "@/lib/supabase";
import Link from "next/link";

const CATEGORY_META: Record<string, { zh: string; en: string }> = {
  learning: { zh: "在路上", en: "On Learning" },
  work: { zh: "做事的人", en: "On Work" },
  things: { zh: "想到的", en: "On Things" },
};

async function getPostsByCategory(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, category, content, created_at")
    .eq("category", slug)
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) return [];
  return data || [];
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const meta = CATEGORY_META[slug];
  const posts = await getPostsByCategory(slug);

  return (
    <div style={{ background: "#FAF8F4", minHeight: "100vh", padding: "80px 10%" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Link
          href="/#journal"
          style={{ color: "#C4714A", textDecoration: "none", fontSize: "0.95rem" }}
        >
          ← 返回 Journal
        </Link>

        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <div
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "#9a9590",
              textTransform: "uppercase",
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            Journal
          </div>
          <h1
            style={{
              fontSize: "2rem",
              fontFamily: "serif",
              color: "#2C2420",
              marginBottom: 4,
            }}
          >
            {meta?.zh ?? slug}
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#9a9590" }}>{meta?.en ?? ""}</p>
        </div>

        {posts.length === 0 ? (
          <div style={{ color: "#9a9590", fontSize: "1rem" }}>暂无文章</div>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {posts.map((post: any, idx: number) => (
              <li
                key={post.id}
                style={{
                  borderBottom:
                    idx !== posts.length - 1 ? "1px solid #E8E4DC" : "none",
                  padding: "28px 0",
                }}
              >
                <Link
                  href={`/posts/${post.id}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#2C2420",
                      marginBottom: 6,
                    }}
                  >
                    {post.title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#9a9590", marginBottom: 8 }}>
                    {post.created_at?.slice(0, 10)}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#4a4744", lineHeight: 1.7 }}>
                    {post.content?.slice(0, 120)}
                    {post.content && post.content.length > 120 ? "..." : ""}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
