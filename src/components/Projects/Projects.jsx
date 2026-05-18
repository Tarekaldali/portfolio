import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import './Projects.css';
import aiImagePlatformImage from '../../assets/image.png';
import tripBookingImage from '../../assets/Screenshot 2025-05-30 192643.png';
import footballLogo from '../../assets/aeRNYjKS_400x400.jpg';
import qaScraperImage from '../../assets/image-14.png';
import leadLinxImage from '../../assets/Screenshot 2026-05-19 000402.png';

const projectsData = [
  {
    id: 1,
    title: 'AI Image Generation Platform',
    description: 'A powerful image generation platform that leverages AI to create stunning visuals. Users can generate, customize, and download AI-created images with various styles and parameters.',
    image: aiImagePlatformImage,
    tags: ['React', 'Python', 'ComfyUI API', 'Supabase', 'REST API'],
    color: '#10b981',
    type: 'desktop',
  },
  {
    id: 2,
    title: 'Trip Booking Mobile App',
    description: 'A mobile application for booking trips and travel experiences. Features include trip browsing, booking management, user profiles, and real-time availability updates.',
    image: tripBookingImage,
    tags: ['Dart', 'Flutter', 'Supabase', 'Mobile Development'],
    color: '#f59e0b',
    type: 'mobile',
  },
  {
    id: 3,
    title: 'Football 90 Minutes',
    description: 'A comprehensive football blog where users can read about upcoming matches, view schedules, leave comments, and interact with other fans through likes and discussions.',
    image: footballLogo,
    tags: ['PHP', 'MySQL', 'phpMyAdmin', 'HTML', 'CSS', 'JavaScript'],
    color: '#3b82f6',
    type: 'logo',
  },
  {
    id: 4,
    title: 'Q&A Web Scraper',
    description: 'An intelligent web scraper that extracts Q&A content from websites. Supports both Arabic and English languages with NLP processing for better data extraction and analysis.',
    image: qaScraperImage,
    tags: ['JavaScript', 'Playwright', 'Cheerio', 'NLP', 'OpenAI API'],
    color: '#00d9ff',
    type: 'desktop',
  },
  {
    id: 5,
    title: 'Instagram Post Generator',
    description: 'A full-stack SaaS platform that generates Instagram-ready hooks, captions, hashtags, and preview images with persistence and fallback handling.',
    image: null,
    tags: ['Vue 3', 'NestJS', 'TypeScript', 'MongoDB Atlas', 'OpenRouter'],
    color: '#ef4444',
    type: 'desktop',
    githubUrl: 'https://github.com/Tarekaldali/Instagram-post-generator',
  },
  {
    id: 6,
    title: 'AffordaHome',
    description: 'Shelter Finder Lebanon, a production-ready platform that helps displaced families find housing while organizations manage listings through a secure dashboard.',
    image: null,
    tags: ['Next.js', 'TypeScript', 'MongoDB Atlas', 'NextAuth', 'Tailwind CSS'],
    color: '#f97316',
    type: 'desktop',
    githubUrl: 'https://github.com/Tarekaldali/AffordaHome',
  },
  {
    id: 7,
    title: 'ArchiCore',
    description: 'A complete architecture-focused web platform with public pages, blog/news, project showcases, and an admin area to manage all content.',
    image: null,
    tags: ['Next.js App Router', 'TypeScript', 'MongoDB', 'Cloudinary', 'Admin CMS'],
    color: '#06b6d4',
    type: 'desktop',
    githubUrl: 'https://github.com/Tarekaldali/ArchiCore',
  },
  {
    id: 8,
    title: 'Gifty',
    description: 'A full-stack gifting web application with a dedicated frontend and backend server architecture for managing gift-oriented user experiences.',
    image: null,
    tags: ['JavaScript', 'Node.js', 'Express', 'Frontend UI', 'REST API'],
    color: '#22c55e',
    type: 'logo',
    githubUrl: 'https://github.com/Tarekaldali/Gifty',
  },
  {
    id: 9,
    title: 'LeadLinx',
    description: 'An AI-powered Reddit lead generation SaaS platform. Features an advanced intent-filtering engine, automated background extraction, secure role-based authentication, and a comprehensive admin dashboard for analytics and revenue tracking.',
    image: leadLinxImage,
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'AI Lead Generation', 'Tailwind CSS'],
    color: '#8b5cf6',
    type: 'desktop',
    githubUrl: 'https://github.com/Tarekaldali/LeadLinx',
  },
  {
    id: 10,
    title: 'AI Bot Platform (Private)',
    description: 'A private platform that provides other websites with AI customer-service bots for automated support, faster replies, and improved user assistance.',
    image: null,
    tags: ['AI Assistant', 'Customer Service', 'Website Integration', 'Automation'],
    color: '#eab308',
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
                {currentProject.image && (
                  <div className={`project-image ${currentProject.type}`}>
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className={`project-img ${currentProject.type}`}
                    />
                  </div>
                )}

                <div className="project-content">
                  <div className="project-title-row">
                    <h3 className="project-title" style={{ color: currentProject.color }}>
                      {currentProject.title}
                    </h3>

                    {currentProject.githubUrl && (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                        style={{
                          borderColor: `${currentProject.color}70`,
                          color: currentProject.color,
                        }}
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

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
