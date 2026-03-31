import Image from "next/image";
import { supabase } from "@/lib/supabase";
import NavBar from "@/app/components/NavBar";
import AboutSection from "@/app/components/AboutSection";
import ProfileSection from "@/app/components/ProfileSection";
import JournalSection from "@/app/components/JournalSection";
import ConnectSection from "@/app/components/ConnectSection";

// SSR 获取文章
async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, category, content, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) return [];
  return data || [];
}

export default async function Home() {
  const posts = await getPosts();
  const postsByCategory = {
    learning: posts.filter((p: any) => p.category === "learning"),
    work: posts.filter((p: any) => p.category === "work"),
    things: posts.filter((p: any) => p.category === "things"),
  };

  return (
    <>
      <NavBar />

      {/* Hero 区域 */}
      <main style={{ padding: "60px 10%" }}>
        <section
          className="w-full max-w-[1400px]"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}
        >
          {/* 左栏：文字垂直居中 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "500px" }}>
            <h1
              className="font-serif"
              style={{ fontSize: "1.4rem", lineHeight: 1.4, color: "#241f1a", margin: 0 }}
            >
              <span className="block">我一直在研究，是什么让人与人之间产生共鸣。</span>
              <span className="block mt-2">然后把这件事变成我的事业。</span>
            </h1>
            <p className="mt-4 text-2xl leading-snug text-[#4f4f4b] max-w-2xl">
              I&apos;m drawn to what makes people connect —
              <br />
              and I&apos;ve spent my career building on that.
            </p>
            <p className="mt-7 text-sm tracking-wide text-[#5d5a54] max-w-xl">
              市场营销硕士 · 创业者 · 深圳 → 雅典 → 下一站
              <br />
              MSc Marketing · Founder · Shenzhen → Athens → What&apos;s next
            </p>
          </div>

          {/* 右栏：照片占位区域 */}
          <div
            style={{
              width: "100%",
              height: "500px",
              background: "#F0EDE6",
              border: "1px solid #E8E4DC",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/hero-photo-2.jpg"
              alt="个人照片"
              width={600}
              height={500}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "12px" }}
              priority
            />
          </div>
        </section>
      </main>

      <AboutSection />
      <ProfileSection />
      <JournalSection postsByCategory={postsByCategory} />
      <ConnectSection />
    </>
  );
}
