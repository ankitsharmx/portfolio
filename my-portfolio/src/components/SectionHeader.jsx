export default function SectionHeader({ num, title }) {
  return (
    <div style={{ marginBottom: "48px" }}>

      {/* Big Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(40px, 5vw, 58px)",
        letterSpacing: "-0.03em",
        color: "var(--text)",
        lineHeight: "1.1",
      }}>
        {title}
      </h2>

      {/* Accent line */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px" }}>
        <div style={{ width: "56px", height: "3px", background: "var(--accent)", borderRadius: "2px" }} />
        <div style={{ width: "16px", height: "3px", background: "var(--accent2)", borderRadius: "2px" }} />
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

    </div>
  );
}