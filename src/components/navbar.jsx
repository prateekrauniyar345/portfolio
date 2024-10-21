// navbar.jsx
import './navbar.css'; // Keep your styling

const Navbar = ({ setActiveSection, activeSection }) => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className= {`navbar-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection("home")}>Home</li>
        <li className={`navbar-item ${activeSection === 'aboutme' ? 'active' : ''}`} onClick={() => setActiveSection("aboutme")}>About Me</li>
        <li className={`navbar-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setActiveSection("projects")}>Projects</li>
        <li className={`navbar-item ${activeSection === 'articles' ? 'active' : ''}`} onClick={() => setActiveSection("articles")}>Articles</li>
        <li className={`navbar-item ${activeSection === 'connect' ? 'active' : ''}`} onClick={() => setActiveSection("connect")}>Connect</li>
      </ul>
    </div>
  );
};

export default Navbar;
