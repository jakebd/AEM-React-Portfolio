// Navbar.js
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false); // state to toggle mobile view
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null); // State for active submenu
  const menuRef = useRef<HTMLUListElement>(null); // Ref for the menu
  const location = useLocation(); // Tracks current route
  
  //set the state for if its mobile
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  //menu toggle state
  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu((prev) => (prev === menuName ? null : menuName));
  };

  //used to handle if the user clicks away from the submenu it closes the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //This resets the location after every click to the submenu closes after navigating to a new route
  useEffect(() => {setActiveSubMenu(null);}, [location]);

  return (
    <nav>
      <div className="nav-container">
        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMobile ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          <Link className="nav-brand" to="/">Jacob's Portfolio</Link>
        </div>
      </div>

      <ul ref={menuRef} className={isMobile ? "nav-links mobile" : "nav-links"}>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li>
          <button type="button" className="dropdown-toggle nav-link" onClick={() => toggleSubMenu("projects")}>
            Projects {activeSubMenu ? <FontAwesomeIcon icon={faChevronUp}/> :  <FontAwesomeIcon icon={faChevronDown} />}
          </button>
            <ul className={`sub-menu ${ activeSubMenu === "projects" ? "open" : "" }`}>
              <li><Link className="nav-link" to="/category/javascript">JavaScript</Link></li>
              <li><Link className="nav-link" to="/category/java">Java</Link></li>
              <li><Link className="nav-link" to="/category/php">PHP</Link></li>
              <li><Link className="nav-link" to="/category/c#">C#</Link></li>
            </ul>
        </li>
        <li><Link className="nav-link" to="/experience">Experience</Link></li>
        <li><Link className="nav-link" to="/chat">Chat</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;