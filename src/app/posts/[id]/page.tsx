
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const CATEGORIES = {
  learning: "在路上",
  work: "做事的人",
  things: "想到的",
};

export default function PostDetail() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const fetchPost = async () => {
      setLoading(true);
      setError("");
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", params.id)
        .eq("published", true)
        .single();
      if (error || !data) {
        setError("文章不存在或已被删除");
        setPost(null);
      } else {
        setPost(data);
      }
      setLoading(false);
    };
    if (params.id) fetchPost();
  }, [params.id]);

  if (loading) {
    return (
      <div style={{ background: "#FAF8F4", minHeight: "100vh", padding: "80px 0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 12, padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 18, color: "#999" }}>加载中...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: "#FAF8F4", minHeight: "100vh", padding: "80px 0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 12, padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 22, color: "#c00", marginBottom: 24 }}>{error}</div>
          <Link href="/" style={{ color: "#C4714A", textDecoration: "underline" }}>← 返回</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#FAF8F4", minHeight: "100vh", padding: "80px 0" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 12, padding: 32 }}>
        <button onClick={() => router.push("/#journal")}
          style={{ color: "#C4714A", background: "none", border: 0, fontSize: 18, display: "inline-block", marginBottom: 32, cursor: "pointer" }}>
          ← 返回
        </button>
        <div style={{ fontSize: "2rem", fontWeight: 700, color: "#2C2420", marginBottom: 18 }}>{post.title}</div>
        <div style={{ color: "#9a9590", fontSize: "1rem", marginBottom: 18 }}>
          {CATEGORIES[post.category as keyof typeof CATEGORIES] || post.category} · {post.created_at?.slice(0, 10)}
        </div>
        <div style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#2C2420", whiteSpace: "pre-line" }}>{post.content}</div>
      </div>
    </div>
  );
}
