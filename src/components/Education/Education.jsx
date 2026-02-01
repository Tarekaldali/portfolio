import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const courses = [
    'Object Oriented Programming (OOP)',
    'Data Structures',
    'Mobile Application Development',
    'Machine Learning',
    'Advanced Web Programming',
    'Software Engineering',
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-logo">
            <img 
              src="src/assets/LIU-logo.png" 
              alt="LIU Logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-fallback">LIU</div>
          </div>

          <div className="education-content">
            <h3 className="university-name">Lebanese International University</h3>
            <p className="degree-name">Bachelor's of Science in Computer Science</p>
            
            <div className="education-meta">
              <span className="meta-item">
                <FaCalendarAlt />
                October 2022 - 2026
              </span>
              <span className="meta-item">
                <FaMapMarkerAlt />
                Saida Campus, Lebanon
              </span>
            </div>

            <p className="education-description">
              Focused on building a strong foundation in computer science while actively 
              working on real-world development projects alongside academics.
            </p>

            <div className="courses-section">
              <h4 className="courses-title">Key Courses</h4>
              <div className="courses-grid">
                {courses.map((course, index) => (
                  <motion.span
                    key={index}
                    className="course-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            <ul className="education-highlights">
              <li>Built and deployed several full-stack projects using React, Node.js, and various databases</li>
              <li>Worked on group and solo projects, managing both frontend and backend responsibilities</li>
              <li>Gained hands-on experience in AI/ML concepts and their practical applications</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
