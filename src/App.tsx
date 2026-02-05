

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


const HomePage = () => {
  return (
    <>
      <Hero />
      <Journey />
      <Education />
      <Projects />
      <Skills />
      
    </>
  );
};


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
      
      
      <Footer />
    </div>
  );
}

export default App;
