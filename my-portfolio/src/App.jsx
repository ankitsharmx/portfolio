import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Fira+Code:wght@400;500&family=Lato:wght@300;400;700&display=swap');
      :root {
        --bg: #07090f;
        --surface: #0d1117;
        --surface2: #111722;
        --border: rgba(255,255,255,0.07);
        --text: #dde2ec;
        --muted: #5a6478;
        --accent: #63cab7;
        --accent2: #e8b86d;
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: var(--bg); color: var(--text); font-family: 'Lato', sans-serif; }
      html { scroll-behavior: smooth; }
      a { color: inherit; text-decoration: none; }
      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", position: "relative" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(99,202,183,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 85% 100%, rgba(232,184,109,0.05) 0%, transparent 60%)"
      }} />
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(99,202,183,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(99,202,183,0.02) 1px, transparent 1px)",
        backgroundSize: "72px 72px"
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}