import { useState, useEffect, createContext, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './custom.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

// Create Theme Context
export const ThemeContext = createContext();
// Create Scroll Context for section refs
export const ScrollContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      projects: projectsRef,
      experience: experienceRef,
      education: educationRef,
      contact: contactRef
    };
    
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Get all sections and their positions
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'services', ref: servicesRef },
        { id: 'projects', ref: projectsRef },
        { id: 'experience', ref: experienceRef },
        { id: 'education', ref: educationRef },
        { id: 'contact', ref: contactRef }
      ];
      
      // Find the current active section
      let currentSection = 'home';
      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ScrollContext.Provider value={{ activeSection, scrollToSection }}>
        <Router>
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <Navbar />
            <main>
              <div ref={homeRef}><Home /></div>
              <div ref={aboutRef}><About /></div>
              <div ref={servicesRef}><Services /></div>
              <div ref={projectsRef}><Projects /></div>
              <div ref={experienceRef}><Experience /></div>
              <div ref={educationRef}><Education /></div>
              <div ref={contactRef}><Contact /></div>
            </main>
            <Footer />
          </div>
        </Router>
      </ScrollContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
