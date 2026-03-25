export default function Footer() {
  return (
    <div style={{ borderTop: "1px solid var(--border)", padding: "28px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em" }}>
        © {new Date().getFullYear()} Ankit Kumar
      </p>
    </div>
  );
}