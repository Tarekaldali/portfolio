/**
 * App.tsx
 * 
 * Main Application Component with React Router
 * 
 * BEGINNER TIP: Routes define which component shows for which URL path.
 * - "/" shows the HomePage (all your sections)
 * - "/contact" shows the ContactPage
 */

import { Routes, Route } from 'react-router-dom';
import StarBackground from './components/StarBackground/StarBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Journey from './components/Journey/Journey';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import './App.css';

/**
 * HomePage Component
 * 
 * This contains all the sections that appear on the main page.
 * We extracted it into a separate component for cleaner code.
 */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Journey />
      <Education />
      <Projects />
      <Skills />
      {/* Contact section removed - now it's a separate page! */}
    </>
  );
};

/**
 * App Component
 * 
 * This is the root component that sets up:
 * 1. The star background (appears on all pages)
 * 2. The navbar (appears on all pages)
 * 3. Routes for different pages
 * 4. The footer (appears on all pages)
 */
function App() {
  return (
    <div className="app">
      <StarBackground />
      <Navbar />   
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route 
            path="/contact" 
            element={
              <ContactPage 
               
                title="Let's Connect"
                subtitle="I'd love to hear from you"
                showForm={true}
                contactInfo={{email: 'tarekaldali1@gmail.com', github: '@tarekaldali', githubUrl: 'https://github.com/tarekaldali', linkedin: 'Tarek Al Dali', linkedinUrl: 'https://www.linkedin.com/in/tarek-y-al-dali/'}}
              />
            } 
          />
        </Routes>
      </main>
      
      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;
