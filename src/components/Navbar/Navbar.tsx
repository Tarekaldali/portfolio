/**
 * Navbar.tsx
 * 
 * Navigation bar component with React Router integration.
 * 
 * BEGINNER TIP: 
 * - Regular anchor tags (<a href="#section">) scroll to sections on the same page
 * - React Router's <Link> component navigates to different pages/routes
 * - We use <Link> for Contact since it's now a separate page
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// ============================================
// TYPESCRIPT INTERFACES
// ============================================

/**
 * NavLink interface - defines what each navigation link looks like
 * BEGINNER TIP: We have two types of links:
 * - 'anchor' links scroll to sections on the same page
 * - 'route' links navigate to different pages
 */
interface NavLink {
  name: string;
  href: string;
  type: 'anchor' | 'route'; // 'anchor' for same-page, 'route' for different page
}

// ============================================
// MAIN COMPONENT
// ============================================

const Navbar = () => {
  // State to track if user has scrolled down
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  // State to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Hook to get current URL location
  const location = useLocation();

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Add 'scrolled' class when user scrolls more than 50px
      setIsScrolled(window.scrollY > 50);
    };
    
    // Add scroll listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links configuration
  // BEGINNER TIP: Easy to add, remove, or modify links here!
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Journey', href: '/#journey', type: 'anchor' },
    { name: 'Education', href: '/#education', type: 'anchor' },
    { name: 'Projects', href: '/#projects', type: 'anchor' },
    { name: 'Skills', href: '/#skills', type: 'anchor' },
    { name: 'Contact', href: '/contact', type: 'route' }, // This goes to the Contact PAGE
  ];

  /**
   * Handle click on navigation links
   * Closes mobile menu and handles smooth scrolling for anchor links
   */
  const handleNavClick = (link: NavLink) => {
    setIsMobileMenuOpen(false);
    
    // If it's an anchor link and we're on the home page, scroll smoothly
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
        {/* Logo - Links to home page */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Tarek</span>
          <span className="logo-dot">.</span>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* 
                BEGINNER TIP: We check the link type to decide which component to use:
                - 'route' links use React Router's <Link>
                - 'anchor' links use regular <a> tags (or Link if we need to navigate first)
              */}
              {link.type === 'route' ? (
                // Route link - navigates to a different page
                <Link
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </Link>
              ) : (
                // Anchor link - scrolls to section or navigates to home first
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
          
          {/* Resume Download Button */}
          <a
            href="/Tarek Al Dali - Resume.pdf"
            download
            className="resume-btn"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
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
