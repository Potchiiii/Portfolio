import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <i className="fas fa-code"></i> Portfolio
        </Link>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <i className="fas fa-home"></i> Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <i className="fas fa-user"></i> About
          </Link>
          <Link 
            to="/blog" 
            className={`navbar-link ${location.pathname === '/blog' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <i className="fas fa-blog"></i> Blog
          </Link>
          <Link 
            to="/experience" 
            className={`navbar-link ${location.pathname === '/experience' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <i className="fas fa-briefcase"></i> Experience
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <i className="fas fa-project-diagram"></i> Projects
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </div>
        
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
          
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
