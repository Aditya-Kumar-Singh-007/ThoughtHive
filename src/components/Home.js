import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to ThoughtHive
          <img src="/notebook.png" alt="ThoughtHive" className="home-title-icon" />
        </h1>
        <p className="home-tagline">“Capture your ideas before they fade away.”</p>

        <div className="home-buttons">
          <button className={isMobile ? "write-btn" : "btn write-btn"} onClick={() => {(localStorage.getItem("token"))?navigate('/addnote'):navigate('/login')}}>
            ✍️ Write Note
          </button>
          <Link to="/getallnotes">
          <button className={isMobile ? "view-btn" : "btn view-btn"} onClick={() => navigate('/notes')}>
            📖 View Notes
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
