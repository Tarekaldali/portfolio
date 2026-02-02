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
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
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
      {/* These components appear on ALL pages */}
      <StarBackground />
      <Navbar />
      
      {/* Main content area with Routes */}
      <main>
        <Routes>
          {/* Home page - shows all sections */}
          <Route path="/" element={<HomePage />} />
          
          {/* Contact page - separate page with props example */}
          <Route 
            path="/contact" 
            element={
              <ContactPage 
                // You can customize these props!
                title="Let's Connect"
                subtitle="I'd love to hear from you"
                showForm={true}
                // contactInfo is optional - uses defaults if not provided
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
