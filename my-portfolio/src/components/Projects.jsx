import { useState } from "react";
import useInView from "../utils/useInView";
import portfolio from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function Tag({ label }) {
  return (
    <span style={{
      background: "rgba(99,202,183,0.1)", color: "var(--accent)",
      border: "1px solid rgba(99,202,183,0.25)",
      borderRadius: "3px", fontSize: "11px",
      fontFamily: "'Fira Code', monospace",
      padding: "3px 9px",
    }}>{label}</span>
  );
}

function TypeBadge({ type }) {
  const colors = {
    "Work Experience": { bg: "rgba(232,184,109,0.1)", color: "var(--accent2)", border: "rgba(232,184,109,0.3)" },
    "Training":        { bg: "rgba(14,165,233,0.1)",  color: "#0ea5e9",        border: "rgba(14,165,233,0.3)" },
    "Project":         { bg: "rgba(99,202,183,0.1)",  color: "var(--accent)",  border: "rgba(99,202,183,0.3)" },
  };
  const c = colors[type] || colors["Project"];
  return (
    <span style={{
      background: c.bg, color: c.color,
      border: `1px solid ${c.border}`,
      borderRadius: "3px", fontSize: "10px",
      fontFamily: "'Fira Code', monospace",
      padding: "3px 10px", letterSpacing: "0.08em",
    }}>{type.toUpperCase()}</span>
  );
}

export default function Projects() {
  const [ref, visible] = useInView();
  const [hovProj, setHovProj] = useState(null);

  return (
    <section id="projects" ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: "all 0.65s ease",
      padding: "80px 0",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader num="04" title="Projects" />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {portfolio.projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHovProj(i)}
              onMouseLeave={() => setHovProj(null)}
              style={{
                background: hovProj === i ? "rgba(99,202,183,0.04)" : "var(--surface)",
                border: `1px solid ${hovProj === i ? "rgba(99,202,183,0.3)" : "var(--border)"}`,
                borderRadius: "10px", padding: "32px 36px",
                transform: hovProj === i ? "translateY(-4px)" : "none",
                transition: "all 0.25s ease",
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px" }}>{p.title}</h3>
                  <TypeBadge type={p.type} />
                </div>
                <span style={{
                  fontFamily: "'Fira Code', monospace", fontSize: "11px",
                  color: "var(--muted)", background: "var(--surface2)",
                  border: "1px solid var(--border)", borderRadius: "3px", padding: "4px 10px",
                }}>{p.period}</span>
              </div>

              {/* Company or URL */}
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" style={{
                  fontFamily: "'Fira Code', monospace", fontSize: "11px",
                  color: "var(--accent)", marginBottom: "12px", display: "block",
                }}>{p.url} ↗</a>
              )}
              {p.company && (
                <p style={{
                  fontFamily: "'Fira Code', monospace", fontSize: "12px",
                  color: "var(--accent2)", marginBottom: "12px",
                }}>@ {p.company}</p>
              )}

              {/* Description */}
              <p style={{
                fontSize: "14px", color: "rgba(221,226,236,0.8)",
                lineHeight: "1.75", marginBottom: "14px",
              }}>{p.description}</p>

              {/* Outcome */}
              <div style={{
                background: "rgba(232,184,109,0.06)",
                borderLeft: "2px solid var(--accent2)",
                padding: "10px 14px", borderRadius: "0 4px 4px 0", marginBottom: "18px",
              }}>
                <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "10px", color: "var(--accent2)", textTransform: "uppercase" }}>Outcome: </span>
                <span style={{ fontSize: "13px", color: "rgba(221,226,236,0.7)" }}>{p.outcome}</span>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {p.tags.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}