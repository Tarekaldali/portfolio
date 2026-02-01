import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'AI Image Generation Platform',
    description: 'A powerful image generation platform that leverages AI to create stunning visuals. Users can generate, customize, and download AI-created images with various styles and parameters.',
    image: 'src/assets/image.png',
    tags: ['React', 'Python', 'ComfyUI API', 'Supabase', 'REST API'],
    color: '#10b981',
    type: 'desktop',
  },
  {
    id: 2,
    title: 'Trip Booking Mobile App',
    description: 'A mobile application for booking trips and travel experiences. Features include trip browsing, booking management, user profiles, and real-time availability updates.',
    image: 'src/assets/Screenshot 2025-05-30 192643.png',
    tags: ['Dart', 'Flutter', 'Supabase', 'Mobile Development'],
    color: '#f59e0b',
    type: 'mobile',
  },
  {
    id: 3,
    title: 'Football 90 Minutes',
    description: 'A comprehensive football blog where users can read about upcoming matches, view schedules, leave comments, and interact with other fans through likes and discussions.',
    image: 'src/assets/aeRNYjKS_400x400.jpg',
    tags: ['PHP', 'MySQL', 'phpMyAdmin', 'HTML', 'CSS', 'JavaScript'],
    color: '#3b82f6',
    type: 'logo',
  },
  {
    id: 4,
    title: 'Q&A Web Scraper',
    description: 'An intelligent web scraper that extracts Q&A content from websites. Supports both Arabic and English languages with NLP processing for better data extraction and analysis.',
    image: '/projects/qa-scraper.png',
    tags: ['JavaScript', 'Playwright', 'Cheerio', 'NLP', 'OpenAI API'],
    color: '#00d9ff',
    type: 'desktop',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-carousel">
          <button className="carousel-btn prev" onClick={prevProject}>
            <FaChevronLeft />
          </button>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                className="project-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                style={{ borderColor: `${currentProject.color}40` }}
              >
                <div className={`project-image ${currentProject.type}`}>
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title}
                    className={`project-img ${currentProject.type}`}
                  />
                </div>

                <div className="project-content">
                  <h3 className="project-title" style={{ color: currentProject.color }}>
                    {currentProject.title}
                  </h3>
                  <p className="project-description">{currentProject.description}</p>

                  <div className="project-tags">
                    {currentProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="tag"
                        style={{ 
                          borderColor: `${currentProject.color}50`,
                          color: currentProject.color 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next" onClick={nextProject}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ 
                background: index === currentIndex ? projectsData[index].color : undefined 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
