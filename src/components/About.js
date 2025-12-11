import React from "react";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">

        <h1 className="about-title">About ThoughtHive</h1>

        <p className="about-description">
          <strong>ThoughtHive</strong> is your personal digital space to capture ideas,
          organize tasks, and preserve meaningful memories. Designed with clarity
          and simplicity in mind, ThoughtHive brings together a beautiful, modern
          interface and fast, seamless note-taking — so your thoughts always have
          a home.
        </p>

        {/* FEATURES */}
        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon">✍️</div>
            <h3>Effortless Writing</h3>
            <p>Create notes quickly with a clean, distraction-free editor.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏷️</div>
            <h3>Smart Organization</h3>
            <p>Use tags to categorize and instantly retrieve your notes.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your ideas stay yours — securely stored and accessible only to you.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Modern UI</h3>
            <p>Enjoy a smooth, animated experience powered by Three.js and React.</p>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="about-tech">
          <h3>Technology Stack</h3>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">Three.js</span>
          </div>
        </div>

        {/* DEVELOPER INFO */}
        <div className="about-developer">
          <h3>Developer</h3>
          <div className="developer-info">
            <p className="developer-name">
              Created by <strong>{process.env.REACT_APP_DEVELOPER_NAME || "Aditya Kumar Singh"}</strong>
            </p>


            <div className="contact-links">
              <a
                href={`mailto:${process.env.REACT_APP_DEVELOPER_EMAIL || "2604aditya@gmail.com"}`}
                className="contact-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                📧 Email
              </a>

              <a
                href={process.env.REACT_APP_GITHUB_URL || "https://github.com/Aditya-Kumar-Singh-007"}
                className="contact-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                🔗 GitHub
              </a>

              <a
                href={process.env.REACT_APP_LINKEDIN_URL || "https://www.linkedin.com/in/aditya-kumar-singh2604"}
                className="contact-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="about-footer">
          <p>© {new Date().getFullYear()} ThoughtHive — Built with ❤️ and curiosity by {process.env.REACT_APP_DEVELOPER_NAME?.split(' ')[0] || "Aditya"}.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
