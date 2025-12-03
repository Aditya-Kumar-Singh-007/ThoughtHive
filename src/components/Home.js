import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to ThoughtHive 🧠</h1>
        <p className="home-tagline">“Capture your ideas before they fade away.”</p>

        <div className="home-buttons">
          <button className="btn write-btn" onClick={() => navigate('/addnote')}>
            ✍️ Write Note
          </button>
          <Link to="/getallnotes">
          <button className="btn view-btn" onClick={() => navigate('/notes')}>
            📖 View Notes
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
