import useInView from "../utils/useInView";
import portfolio from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const [ref, visible] = useInView();

  return (
    <section id="education" ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: "all 0.65s ease",
      padding: "80px 0",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>

        {/* EDUCATION */}
        <SectionHeader num="05" title="Education" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "72px" }}>
          {portfolio.education.map((ed, i) => (
            <div key={i} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderTop: `3px solid ${ed.accent}`,
              borderRadius: "10px",
              padding: "24px 26px",
              transition: "transform 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}
            >
              {/* Grade badge */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: "14px",
              }}>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "10px", color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}>{ed.period}</span>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px", color: ed.accent,
                  fontWeight: "700",
                }}>{ed.detail}</span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "17px", color: "var(--text)",
                marginBottom: "6px", lineHeight: "1.3",
              }}>{ed.institution}</h3>

              <p style={{
                fontSize: "13px",
                color: "rgba(221,226,236,0.65)",
                marginBottom: "8px",
              }}>{ed.degree}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "11px" }}>📍</span>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "10px", color: ed.accent,
                }}>{ed.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <SectionHeader num="06" title="Certifications" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
          {portfolio.certificates.map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noreferrer"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "24px 26px",
                display: "block",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "22px" }}>🏅</span>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "10px", color: "var(--muted)",
                }}>↗ VIEW</span>
              </div>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "15px", color: "var(--text)",
                fontWeight: "700", marginBottom: "8px",
                lineHeight: "1.4",
              }}>{cert.name}</p>
              <p style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: "11px", color: "var(--accent)",
                marginBottom: "4px",
              }}>{cert.issuer}</p>
              <p style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: "10px", color: "var(--muted)",
              }}>{cert.date}</p>
            </a>
          ))}
        </div>

        {/* Achievement */}
        <div style={{
          background: "rgba(99,202,183,0.05)",
          border: "1px solid rgba(99,202,183,0.2)",
          borderRadius: "10px", padding: "20px 28px",
          display: "flex", alignItems: "center", gap: "16px",
        }}>
          <span style={{ fontSize: "28px" }}>🏆</span>
          <div>
            <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--text)" }}>
              Solved 400+ DSA Problems
            </p>
            <p style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "11px", color: "var(--muted)", marginTop: "3px",
            }}>Across multiple coding platforms · Nov 2025</p>
          </div>
        </div>

      </div>
    </section>
  );
}