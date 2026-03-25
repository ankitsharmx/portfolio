import useInView from "../utils/useInView";
import portfolio from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const highlights = [
  { icon: "🎓", label: "LPU, Punjab", sub: "B.Tech CSE · CGPA 7.84" },
  { icon: "🤖", label: "ML & Data Engineering", sub: "End-to-end pipelines" },
  { icon: "🌐", label: "MERN + GenAI", sub: "Full-stack AI apps" },
  { icon: "🏆", label: "400+ DSA Problems", sub: "Multiple platforms" },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: "all 0.65s ease",
      padding: "80px 0",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader num="01" title="About Me" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>

          {/* LEFT — Bio Text */}
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {[
              { text: portfolio.about,  icon: "◆" },
              { text: portfolio.about2, icon: "◆" },
              { text: portfolio.about3, icon: "◆" },
              { text: portfolio.about4, icon: "◆" },
            ].map(({ text, icon }, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{
                  color: "var(--accent)", fontSize: "8px",
                  marginTop: "7px", flexShrink: 0,
                }}>{icon}</span>
                <p style={{
                  lineHeight: "1.85",
                  color: "rgba(221,226,236,0.85)",
                  fontSize: "15px",
                }}>{text}</p>
              </div>
            ))}
          </div>

          {/* RIGHT — Highlight Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {highlights.map(({ icon, label, sub }) => (
              <div key={label} style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "28px 24px",
                textAlign: "center",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(99,202,183,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "15px", color: "var(--text)",
                  fontWeight: "700", marginBottom: "6px",
                }}>{label}</p>
                <p style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "10px", color: "var(--muted)",
                  letterSpacing: "0.05em",
                }}>{sub}</p>
              </div>
            ))}

            {/* Status badge */}
            <div style={{
              gridColumn: "1 / -1",
              background: "rgba(99,202,183,0.06)",
              border: "1px solid rgba(99,202,183,0.25)",
              borderRadius: "12px",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 8px rgba(99,202,183,0.6)",
                flexShrink: 0,
                animation: "pulse 2s infinite",
              }} />
              <div>
                <p style={{ fontSize: "13px", color: "var(--text)", fontWeight: "600" }}>
                  Open to Data Engineering & ML roles
                </p>
                <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "3px" }}>
                  Punjab, India · ankitsharmaroh@gmail.com · +91 7257916334
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 8px rgba(99,202,183,0.6); }
          50% { box-shadow: 0 0 16px rgba(99,202,183,1); }
        }
      `}</style>
    </section>
  );
}