import { useRef, useState } from "react";
import portfolio from "../data/portfolioData";
import profilePhoto from "../assets/profile.png";

export default function Hero() {
  const [photo, setPhoto] = useState(profilePhoto);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "200px 28px 72px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "60px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>

        {/* LEFT — All Text Details */}
        <div style={{ flex: 1, minWidth: "300px", textAlign: "left" }}>

          {/* Badge */}
          <p style={{
            fontFamily: "'Fira Code', monospace", fontSize: "11px",
            color: "var(--accent)", letterSpacing: "0.15em", marginBottom: "14px",
          }}>
            ◈ Data Engineer & CS Engineer
          </p>

          {/* Hi line */}
          <p style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "16px",
            color: "var(--text)",
            marginBottom: "0px",
            letterSpacing: "0.05em",
          }}>
            Hi, I'm
          </p>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 6vw, 68px)",
            lineHeight: "1.05", letterSpacing: "-0.03em",
            marginBottom: "16px", marginTop: "0px", color: "var(--text)",
          }}>
            Ankit<br />
            <span style={{ color: "var(--accent)" }}>Kumar</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: "15px", color: "rgba(221,226,236,0.8)",
            marginBottom: "28px", maxWidth: "420px", lineHeight: "1.7",
          }}>
            I love to build intelligent data pipelines and scalable systems with modern engineering tools.
          </p>

          {/* Quick Info Rows */}


          {/* Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#projects" style={{
              background: "var(--accent)", color: "#07090f",
              fontFamily: "'Fira Code', monospace", fontSize: "12px",
              fontWeight: "500", letterSpacing: "0.07em",
              padding: "11px 26px", borderRadius: "3px",
              display: "inline-block",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 22px rgba(99,202,183,0.28)"; }}
              onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
            >VIEW PROJECTS</a>

            <a href="https://linkedin.com/in/ankit-sharma-674434399" target="_blank" rel="noreferrer" style={{
              border: "1px solid var(--accent)", color: "var(--accent)",
              fontFamily: "'Fira Code', monospace", fontSize: "12px",
              letterSpacing: "0.07em", padding: "11px 26px", borderRadius: "3px",
              display: "inline-block",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => { e.target.style.background = "rgba(99,202,183,0.1)"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; }}
            >LINKEDIN ↗</a>

            <a href="https://github.com/ankitsharmx" target="_blank" rel="noreferrer" style={{
              border: "1px solid var(--border)", color: "var(--text)",
              fontFamily: "'Fira Code', monospace", fontSize: "12px",
              letterSpacing: "0.07em", padding: "11px 26px", borderRadius: "3px",
              display: "inline-block",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.target.style.borderColor = "var(--accent)"}
              onMouseLeave={e => e.target.style.borderColor = "var(--border)"}
            >GITHUB ↗</a>
          </div>
        </div>

        {/* RIGHT — Big Circular Photo */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          marginRight: "80px",
        }}>

          {/* Outer decorative ring */}
          <div style={{
            position: "absolute",
            width: "360px", height: "360px", borderRadius: "50%",
            border: "1px solid rgba(99,202,183,0.15)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", zIndex: 0,
          }} />

          {/* Second decorative ring */}
          <div style={{
            position: "absolute",
            width: "395px", height: "395px", borderRadius: "50%",
            border: "1px solid rgba(99,202,183,0.06)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", zIndex: 0,
          }} />

          {/* Photo Circle */}
          <div
            onClick={() => fileInputRef.current.click()}
            title="Click to upload your photo"
            style={{
              width: "320px", height: "320px", borderRadius: "50%",
              border: photo ? "4px solid var(--accent)" : "2px dashed var(--accent)",
              background: "var(--surface)", cursor: "pointer", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 56px rgba(99,202,183,0.25), 0 0 100px rgba(99,202,183,0.1)",
              transition: "box-shadow 0.3s",
              position: "relative", zIndex: 1,
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 72px rgba(99,202,183,0.4), 0 0 120px rgba(99,202,183,0.15)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 56px rgba(99,202,183,0.25), 0 0 100px rgba(99,202,183,0.1)"}
          >
            {photo
              ? (
                <img
                  src={photo}
                  alt="Profile"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top center",
                  }}
                />
              )
              : (
                <div style={{ textAlign: "center", padding: "16px" }}>
                  <div style={{ fontSize: "40px", marginBottom: "10px" }}>📷</div>
                  <span style={{
                    fontFamily: "'Fira Code', monospace", fontSize: "10px",
                    color: "var(--accent)", letterSpacing: "0.08em", lineHeight: "1.7",
                  }}>
                    CLICK TO<br />ADD PHOTO
                  </span>
                </div>
              )
            }
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />
        </div>

      </div>
    </div>
  );
}