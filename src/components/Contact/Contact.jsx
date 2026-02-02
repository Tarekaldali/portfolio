import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>

            <div className="contact-links">
              <a href="mailto:tarekaldali1@gmail.com" className="contact-link">
                <div className="link-icon">
                  <FaEnvelope />
                </div>
                <div className="link-content">
                  <span className="link-label">Email</span>
                  <span className="link-value">tarekaldali1@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/tarekaldali" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="link-icon">
                  <FaGithub />
                </div>
                <div className="link-content">
                  <span className="link-label">GitHub</span>
                  <span className="link-value">@tarekaldali</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/tarek-y-al-dali/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="link-icon">
                  <FaLinkedin />
                </div>
                <div className="link-content">
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">Tarek Al Dali</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"  
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                rows="5"
              />
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
