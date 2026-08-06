import { useState, useEffect } from "react";
import "./Navbar.css";
import profile from "../../assets/images/prince.png"; // Update path if needed

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll);};
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={profile} alt="Prince Kumar" className="nav-profile-img" />
        <h2>Prince Kumar</h2>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> ☰</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;