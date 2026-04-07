import { submitPassword } from "./actions";

export default async function PasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fdf8f0",
        fontFamily: '"Georgia", "Times New Roman", serif',
      }}
    >
      <div style={{ width: "100%", maxWidth: "360px", padding: "0 24px" }}>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#6b6b6b",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          这是一个私人站点，需要密码访问。
        </p>
        <form action={submitPassword}>
          <input
            type="password"
            name="password"
            placeholder="输入密码"
            autoFocus
            style={{
              display: "block",
              width: "100%",
              padding: "10px 14px",
              fontSize: "1rem",
              fontFamily: "inherit",
              background: "#fff",
              border: "1px solid #d6d0c8",
              borderRadius: "6px",
              color: "#2d2d2d",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              marginTop: "12px",
              padding: "10px 14px",
              fontSize: "0.9rem",
              fontFamily: "inherit",
              background: "#2d2d2d",
              color: "#fdf8f0",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            进入
          </button>
        </form>
        {params.error && (
          <p
            style={{
              marginTop: "16px",
              fontSize: "0.85rem",
              color: "#a05a2c",
            }}
          >
            密码不对，再试试。
          </p>
        )}
      </div>
    </div>
  );
}
