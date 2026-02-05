import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  
  { name: 'JavaScript', category: 'language', color: '#f7df1e' },
  { name: 'TypeScript', category: 'language', color: '#3178c6' },
  { name: 'Python', category: 'language', color: '#3776ab' },
  { name: 'PHP', category: 'language', color: '#777bb4' },
  { name: 'Dart', category: 'language', color: '#0175c2' },
  { name: 'Java', category: 'language', color: '#ed8b00' },
  { name: 'SQL', category: 'language', color: '#336791' },
  
  
  { name: 'React', category: 'frontend', color: '#61dafb' },
  { name: 'Next.js', category: 'frontend', color: '#ffffff' },
  { name: 'HTML5', category: 'frontend', color: '#e34f26' },
  { name: 'CSS3', category: 'frontend', color: '#1572b6' },
  
  
  { name: 'Node.js', category: 'backend', color: '#339933' },
  { name: 'Supabase', category: 'backend', color: '#3ecf8e' },
  { name: 'MySQL', category: 'backend', color: '#4479a1' },
  { name: 'phpMyAdmin', category: 'backend', color: '#6c78af' },
  
  
  { name: 'Flutter', category: 'mobile', color: '#02569b' },
  { name: 'REST APIs', category: 'other', color: '#ff6c37' },
  { name: 'Git', category: 'other', color: '#f05032' },
  { name: 'OpenAI API', category: 'other', color: '#10a37f' },
  { name: 'Playwright', category: 'other', color: '#2ead33' },
];

const categoryColors = {
  language: '#f59e0b',
  frontend: '#06b6d4',
  backend: '#10b981',
  mobile: '#8b5cf6',
  other: '#ec4899',
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -3 }}
                style={{
                  borderColor: skill.color,
                  color: skill.color,
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="skills-legend">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="legend-item">
              <span className="legend-dot" style={{ background: color }}></span>
              <span className="legend-text">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
