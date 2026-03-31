"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LangContext";

const PARAS = {
  zh: [
    `我对人的方式一直很感兴趣。不是人口统计学意义上的"用户"，而是真实的人，他们相信什么，被什么打动，为什么有些品牌能让人觉得"这说的是我"，而有些却消失无声。这个问题驱动了我过去几年所有的工作。`,
    "在创业的几年里，我学到最多的不是方法论，而是人。我们服务过十几个品牌、接触过无数创始人，每一次合作都让我更确定：好的市场不是靠套路赢的，而是靠真正理解人。",
    "我不是一个被单一标签定义的人。我对很多行业保持好奇，常常能看到别人没注意到的可能性。很多人说跟我相处没有压力，我想是因为我对人真的感兴趣。我觉得人与人之间的互动就是一种特别的化学反应，总会有新奇的灵感产生。",
    "现在我在雅典读研，第一次真正以局外人的视角观察一个完全不同的市场和文化。这种陌生感让我的思考变得更清晰。我一直在研究是什么让人与人之间产生共鸣，这是我的工作，也是我这个人。",
  ],
  en: [
    "I've always been drawn to how people work. Not \"users\" in a demographic sense — but real people. What they believe, what moves them, why some brands make someone feel \"this is exactly me\" while others disappear without a trace. That question has driven everything I've done.",
    "The years I spent building a company taught me more about people than anything else. We worked with dozens of brands, met countless founders, and every collaboration made me more certain: great marketing isn't won by playbooks. It's won by genuinely understanding people.",
    "I'm not someone who fits into one lane. I stay curious across industries and tend to notice possibilities others miss. People often say I'm easy to be around — I think it's because I'm genuinely interested in them. I believe every interaction between people is its own kind of chemistry, and something unexpected always sparks.",
    "I'm currently in Athens for my MSc, experiencing for the first time what it feels like to observe a completely different market as an outsider. That strangeness has sharpened my thinking. I've always been drawn to what makes people connect — that's my work, and that's who I am.",
  ],
};

export default function AboutSection() {
  const { lang } = useLang();
  const paras = PARAS[lang];

  return (
    <section
      id="about"
      className="about-section"
      style={{ padding: "80px 10%", background: "#FAF8F4" }}
    >
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "45% 50%",
          gap: "5%",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* 左栏：竖版照片 */}
        <div>
          <div
            className="about-photo-wrap"
            style={{
              width: "100%",
              height: "600px",
              background: "#E8E4DC",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/about-photo.jpg"
              alt="About Photo"
              width={400}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
              priority
            />
          </div>
        </div>

        {/* 右栏：文字 */}
        <div style={{ background: "#FFFFFF", borderRadius: "12px", padding: "40px" }}>
          {/* 小标题：始终双语 */}
          <div
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "#9a9590",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
              fontWeight: 600,
            }}
          >
            关于我 About
          </div>

          {paras.map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#2C2420",
                marginBottom: i < paras.length - 1 ? "28px" : 0,
                fontStyle: i === paras.length - 1 ? "italic" : "normal",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
