/**
 * ContactPage.tsx
 * 
 * This is a separate page for the Contact section.
 * It uses TypeScript with Props to make the component reusable.
 * 
 * BEGINNER TIP: Props allow you to pass data into components,
 * making them flexible and reusable!
 */

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ContactPage.css';


interface ContactInfo {
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
}


interface ContactPageProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
  showForm?: boolean;
}


const defaultContactInfo: ContactInfo = {
  email: '',
  github: '',
  githubUrl: '',
  linkedin: '',
  linkedinUrl: '',
};


const ContactPage = ({
  title = 'Get In Touch',
  subtitle = "Let's work together on your next project",
  contactInfo = defaultContactInfo,
  showForm = true,
}: ContactPageProps) => {
  

  return (
    <div className="contact-page">

      <div className="contact-page-container">
        {/* Page Header with Animation */}
        <motion.div
          className="contact-page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contact-page-title">{title}</h1>
          <p className="contact-page-subtitle">{subtitle}</p>
        </motion.div>

        <div className="contact-page-content">
          {/* Left Side - Contact Information */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>

            {/* Contact Links */}
            <div className="contact-links">
              {/* Email Link */}
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                <div className="link-icon">
                  <FaEnvelope />
                </div>
                <div className="link-content">
                  <span className="link-label">Email</span>
                  <span className="link-value">{contactInfo.email}</span>
                </div>
              </a>

              {/* GitHub Link */}
              <a 
                href={contactInfo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <div className="link-icon">
                  <FaGithub />
                </div>
                <div className="link-content">
                  <span className="link-label">GitHub</span>
                  <span className="link-value">{contactInfo.github}</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a 
                href={contactInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <div className="link-icon">
                  <FaLinkedin />
                </div>
                <div className="link-content">
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">{contactInfo.linkedin}</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form (only shown if showForm is true) */}
          {showForm && (
            <motion.form
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message..."
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the component so other files can use it
export default ContactPage;
