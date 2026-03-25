import useInView from "../utils/useInView";
import portfolio from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function Tag({ label }) {
  return (
    <span style={{ background: "rgba(99,202,183,0.1)", color: "var(--accent)", border: "1px solid rgba(99,202,183,0.25)", borderRadius: "3px", fontSize: "11px", fontFamily: "'Fira Code', monospace", padding: "3px 9px" }}>
      {label}
    </span>
  );
}

export default function Experience() {
  const [ref, visible] = useInView();
  return (
    <section id="experience" ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transition: "all 0.65s ease", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader num="03" title="Work Experience" />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {portfolio.experience.map((exp, i) => (
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: `3px solid ${exp.accent}`, borderRadius: "10px", padding: "32px 36px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px" }}>{exp.role}</h3>
                  <p style={{ color: exp.accent, fontFamily: "'Fira Code', monospace", fontSize: "13px", marginTop: "4px" }}>{exp.company}</p>
                </div>
                <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "11px", color: "var(--muted)", background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "3px", padding: "4px 10px" }}>{exp.period}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "rgba(221,226,236,0.8)", lineHeight: "1.7" }}>
                    <span style={{ color: exp.accent, flexShrink: 0 }}>▸</span> {pt}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {exp.tags.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}