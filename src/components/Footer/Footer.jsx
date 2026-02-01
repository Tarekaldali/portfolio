import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-name">Tarek</span>
            <span className="brand-dot">.</span>
          </div>
          
          <p className="footer-text">
            Full Stack Developer passionate about creating elegant digital experiences.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/Tarekaldali" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tarek-y-al-dali/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:tarekaldali1234@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Tarek Al Dali. Made with <FaHeart className="heart-icon" /> in Lebanon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
