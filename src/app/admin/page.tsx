"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const CATEGORIES = [
  { label: "在路上", value: "learning" },
  { label: "做事的人", value: "work" },
  { label: "想到的", value: "things" },
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // 简单密码校验（可替换为更安全方案）
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthed(true);
      setMsg("");
    } else {
      setMsg("密码错误");
    }
  };

  // 读取文章
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, category, content, created_at")
      .order("created_at", { ascending: false });
    if (!error && data) setPosts(data);
  };

  useEffect(() => {
    if (authed) fetchPosts();
  }, [authed]);

  // 发布或更新
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setMsg("标题和正文不能为空");
      return;
    }
    let error;
    if (editingId) {
      // 更新
      ({ error } = await supabase.from("posts").update({ title, category, content }).eq("id", editingId));
    } else {
      // 新增
      ({ error } = await supabase.from("posts").insert([
        { title, category, content, created_at: new Date().toISOString(), published: true },
      ]));
    }
    if (error) {
      setMsg("发布失败: " + error.message);
    } else {
      setMsg(editingId ? "更新成功" : "发布成功");
      setTitle("");
      setContent("");
      setEditingId(null);
      fetchPosts();
    }
  };

  // 删除
  const handleDelete = async (id: string) => {
    if (!window.confirm("确定要删除这篇文章吗？")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (!error) {
      setMsg("删除成功");
      fetchPosts();
    } else {
      setMsg("删除失败: " + error.message);
    }
  };

  // 编辑
  const handleEdit = (post: any) => {
    setTitle(post.title);
    setCategory(post.category);
    setContent(post.content);
    setEditingId(post.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!authed) {
    return (
      <div style={{ maxWidth: 400, margin: "100px auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h2>后台登录</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 16 }}
          />
          <button type="submit" style={{ width: "100%", padding: 10, background: "#2C2420", color: "#fff", border: 0, borderRadius: 6 }}>登录</button>
        </form>
        {msg && <div style={{ color: "#c00", marginTop: 12 }}>{msg}</div>}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "60px auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <h2>{editingId ? "编辑文章" : "写文章"}</h2>
      <form onSubmit={handlePublish}>
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 16 }}
        />
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 16 }}>
          {CATEGORIES.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        <textarea
          placeholder="正文"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={10}
          style={{ width: "100%", padding: 8, marginBottom: 16 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10, background: "#2C2420", color: "#fff", border: 0, borderRadius: 6 }}>{editingId ? "更新" : "发布"}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setTitle(""); setContent(""); }} style={{ marginLeft: 16, padding: 10, border: 0, borderRadius: 6 }}>取消编辑</button>}
      </form>
      {msg && <div style={{ color: msg.includes("成功") ? "#090" : "#c00", marginTop: 12 }}>{msg}</div>}

      {/* 文章列表 */}
      <div style={{ marginTop: 48 }}>
        <h3>已发布文章</h3>
        {posts.length === 0 ? (
          <div style={{ color: '#999', marginTop: 16 }}>暂无文章</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {posts.map(post => (
              <li key={post.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{post.title}</div>
                  <div style={{ fontSize: 12, color: '#999' }}>{CATEGORIES.find(c => c.value === post.category)?.label} · {post.created_at?.slice(0, 10)}</div>
                </div>
                <div>
                  <button onClick={() => handleEdit(post)} style={{ marginRight: 12, padding: '4px 10px', border: 0, borderRadius: 4, background: '#eee', cursor: 'pointer' }}>编辑</button>
                  <button onClick={() => handleDelete(post.id)} style={{ padding: '4px 10px', border: 0, borderRadius: 4, background: '#f66', color: '#fff', cursor: 'pointer' }}>删除</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
