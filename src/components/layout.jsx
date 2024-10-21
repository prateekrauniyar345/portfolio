// layout.jsx
import React, { useState } from "react";
import Navbar from './navbar';
import Home from './home';
import AboutMe from './aboutme';
import Projects from './projects';
import Articles from './articles';
import Connect from './connect';
import './layout.css';
import Heading from './heading.jsx';

function Layout() {
  const [activeSection, setActiveSection] = useState('home'); // Default section

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection}/>;
      case 'aboutme':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'articles':
        return <Articles />;
      case 'connect':
        return <Connect />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Heading />
      <div className="OuterLayout">
        <div className="LeftSide">
          {/* Pass setActiveSection to Navbar */}
          <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
        </div>
        <div className="RightSide">
          {renderSection()}
        </div>
      </div>
    </>
  );
}

export default Layout;
