import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';



interface NavLink {
  name: string;
  href: string;
  type: 'anchor' | 'route'; 
}



const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  
  const location = useLocation();

  
  useEffect(() => {
    const handleScroll = () => {
      
      setIsScrolled(window.scrollY > 50);
    };
    
    
    window.addEventListener('scroll', handleScroll);
    
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Journey', href: '/#journey', type: 'anchor' },
    { name: 'Education', href: '/#education', type: 'anchor' },
    { name: 'Projects', href: '/#projects', type: 'anchor' },
    { name: 'Skills', href: '/#skills', type: 'anchor' },
    { name: 'Contact', href: '/contact', type: 'route' }, 
  ];

  
  const handleNavClick = (link: NavLink) => {
    setIsMobileMenuOpen(false);
    
    
    if (link.type === 'anchor' && location.pathname === '/') {
      const sectionId = link.href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Tarek</span>
          <span className="logo-dot">.</span>
        </Link>

        
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              
              {link.type === 'route' ? (
                
                <Link
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </Link>
              ) : (
                
                <Link
                  to={link.href}
                  className="nav-link"
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
          
          
          <a
            href="/Tarek Al Dali - Resume.pdf"
            download
            className="resume-btn"
          >
            Resume
          </a>
        </div>

        
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
