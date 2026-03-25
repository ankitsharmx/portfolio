import { useEffect, useState } from "react";

const NAV_ITEMS = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(7,9,15,0.88)", backdropFilter: "blur(18px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "58px" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px" }}>
          <span style={{ color: "var(--accent)" }}>A</span>nkit
        </span>
        <div style={{ display: "flex", gap: "28px" }}>
          {NAV_ITEMS.map(id => (
            <a key={id} href={`#${id}`} style={{
              fontFamily: "'Fira Code', monospace", fontSize: "11px",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: active === id ? "var(--accent)" : "var(--muted)",
              borderBottom: active === id ? "1px solid var(--accent)" : "1px solid transparent",
              paddingBottom: "2px", transition: "color 0.2s",
            }}>{id}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}