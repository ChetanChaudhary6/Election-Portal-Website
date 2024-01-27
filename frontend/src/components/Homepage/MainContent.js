// MainContent.js
import React from "react";
import "./MainContent.css"; // CSS for the main content
import { Link } from 'react-router-dom';
const MainContent = () => {
  return (
    <div className="main-content">
      <div className="announcements-box">
        <h2 className="announcements-title">Announcements</h2>
        <ul className="announcements-list">
          <li>Announcement 1</li>
          <li>Announcement 2</li>
          <li>Announcement 3</li>
        </ul>
      </div>
      <div className="buttons">
      <Link to="/MyForm" className="button apply-button">
          Nominated Form
          </Link>
          <Link to="/Election" className="button vote-button">
          Election Page
          </Link>
          <Link to="/Result" className="button vote-button">
          Result Page
          </Link>
      </div>
    </div>
  );
};

export default MainContent;
