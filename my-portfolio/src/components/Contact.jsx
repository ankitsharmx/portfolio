import { useState } from "react";
import useInView from "../utils/useInView";
import portfolio from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [ref, visible] = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transition: "all 0.65s ease", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader num="06" title="Contact" />
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px", padding: "52px 44px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "26px", marginBottom: "10px" }}>Let's build something together.</p>
          <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: "440px", margin: "0 auto 36px", lineHeight: "1.7" }}>
            Open to full-time roles, internships, freelance projects, or just a good tech conversation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
            <button onClick={copyEmail} style={{ background: "var(--accent)", color: "#07090f", fontFamily: "'Fira Code', monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.07em", padding: "12px 26px", borderRadius: "3px", border: "none", cursor: "pointer" }}>
              {copied ? "✓ COPIED!" : "COPY EMAIL"}
            </button>
            <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" style={{ border: "1px solid var(--border)", color: "var(--text)", fontFamily: "'Fira Code', monospace", fontSize: "12px", letterSpacing: "0.07em", padding: "12px 26px", borderRadius: "3px" }}>LINKEDIN ↗</a>
            <a href={portfolio.contact.github} target="_blank" rel="noreferrer" style={{ border: "1px solid var(--border)", color: "var(--text)", fontFamily: "'Fira Code', monospace", fontSize: "12px", letterSpacing: "0.07em", padding: "12px 26px", borderRadius: "3px" }}>GITHUB ↗</a>
          </div>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px", color: "var(--muted)", marginTop: "32px" }}>📞 {portfolio.contact.phone}</p>
        </div>
      </div>
    </section>
  );
}