import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import './Journey.css';

const journeyData = [
  {
    id: 1,
    period: 'October 2022 - 2026',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Lebanese International University (LIU)',
    description: 'Pursuing my degree in Computer Science at LIU Saida Campus',
    highlights: [
      'Object Oriented Programming (OOP)',
      'Data Structures',
      'Mobile Application Development',
      'Machine Learning',
      'Advanced Web Programming',
      'Software Engineering',
    ],
    icon: FaGraduationCap,
    color: '#00d9ff',
  },
  {
    id: 2,
    period: '2025 - Present',
    title: 'Full Stack Developer Intern',
    organization: 'Cyber Waver',
    description: 'Working on cutting-edge web applications and AI-powered solutions',
    highlights: [
      'Building applications with Next.js',
      'Developed Q&A Scraper for data extraction',
      'AI Bot Management System (Efendem)',
    ],
    icon: FaBriefcase,
    color: '#10b981',
  },
  {
    id: 3,
    period: '3 Months Program',
    title: 'Programming & Communication Skills',
    organization: 'STC Digital Hub',
    description: 'Intensive training program focused on technical and soft skills',
    highlights: [
      'Advanced Programming Techniques',
      'Professional Communication Skills',
      'Team Collaboration',
    ],
    icon: FaLaptopCode,
    color: '#8b5cf6',
  },
];

const Journey = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Programming Journey</h2>
          <p className="section-subtitle">
            A timeline of my growth as a developer
          </p>
        </motion.div>

        <div className="timeline">
          {journeyData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <span 
                    className="timeline-period"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.period}
                  </span>
                  <div 
                    className="timeline-icon"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    <item.icon />
                  </div>
                </div>
                
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p className="timeline-description">{item.description}</p>
                
                <ul className="timeline-highlights">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>
                      <span className="highlight-dot" style={{ backgroundColor: item.color }}></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="timeline-dot" style={{ backgroundColor: item.color }}></div>
            </motion.div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
