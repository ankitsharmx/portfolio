import useInView from "../utils/useInView";
import portfolio from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const icons = {
  // Languages
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C++":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  // Frontend
  "React.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  // Backend
  "Node.js":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "REST APIs":  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "JWT Auth":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  // Database
  "MongoDB":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  // Tools
  "Git":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Excel":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  "Selenium": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  "Pandas":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  // Soft Skills
  "Problem-Solving": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Team Player":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  "Communication":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
};

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: "all 0.65s ease",
      padding: "80px 0",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader num="02" title="Skills" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {portfolio.skills.map(({ cat, items }) => (
            <div key={cat} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "28px 32px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(99,202,183,0.35)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              {/* Category title */}
              <p style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: "22px", color: "var(--accent2)",
                letterSpacing: "-0.01em",
                marginBottom: "6px",
              }}>{cat}</p>
              <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginBottom: "20px", borderRadius: "2px" }} />
              {/* Skills grid — 3 per row */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}>
                {items.map(item => (
                  <div key={item} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(99,202,183,0.4)";
                      e.currentTarget.style.background = "rgba(99,202,183,0.05)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    {/* Icon */}
                    {icons[item] && (
                      <img
                        src={icons[item]}
                        alt={item}
                        style={{
                          width: "24px", height: "24px",
                          objectFit: "contain", flexShrink: 0,
                          filter: item === "Express.js" || item === "GitHub" ? "invert(1)" : "none",
                        }}
                      />
                    )}
                    <span style={{
                      fontSize: "13px", color: "var(--text)",
                      fontFamily: "'Fira Code', monospace",
                    }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}