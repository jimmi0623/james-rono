import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ScrollContext } from '../App';
import { 
  Navbar as BootstrapNavbar, 
  Nav, 
  Container, 
  Button, 
  Offcanvas
} from 'react-bootstrap';

const Navbar = () => {
  
  const { activeSection, scrollToSection } = useContext(ScrollContext);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    handleClose();
  };

  const navLinkClass = `fw-medium px-3 py-2 rounded-pill mx-1 text-light nav-pill`;
  const activeNavLinkClass = `${navLinkClass} bg-primary text-white active-nav-pill`;

  return (
    <BootstrapNavbar 
      bg="dark"
      variant="dark"
      expand="lg" 
      className="py-3 shadow-sm sticky-top"
    >
      <Container>
        <BootstrapNavbar.Brand 
          onClick={() => handleNavClick('home')}
          className="fw-bold fs-4 cursor-pointer my-style"
          style={{ cursor: 'pointer' }}
        >
          James Rono
        </BootstrapNavbar.Brand>
        
		{/*Mobile Toggle Button */}
        <Button 
          variant="outline-light"
          className="d-lg-none"
          onClick={handleShow}
        >
          <FaBars />
        </Button>

        {/* Desktop Navigation */}
        <div className="d-none d-lg-flex justify-content-between align-items-center w-100 ms-4">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick('home')} className={activeSection === 'home' ? activeNavLinkClass : navLinkClass}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')} className={activeSection === 'about' ? activeNavLinkClass : navLinkClass}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('services')} className={activeSection === 'services' ? activeNavLinkClass : navLinkClass}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? activeNavLinkClass : navLinkClass}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('experience')} className={activeSection === 'experience' ? activeNavLinkClass : navLinkClass}>Experience</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('education')} className={activeSection === 'education' ? activeNavLinkClass : navLinkClass}>Education</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? activeNavLinkClass : navLinkClass}>Contact</Nav.Link>
          </Nav>
		  {/*
          <Button 
            variant={darkMode ? "outline-light" : "outline-dark"} 
            onClick={toggleDarkMode}
            className="d-flex align-items-center rounded-pill px-1 py-1 fs-6 btn-sm"
          >
            {darkMode ? <FaSun className="mx-2" /> : <FaMoon className="mx-2" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
</Button>*/}
        </div>

        {/* Offcanvas Menu for Mobile */}
        <Offcanvas 
          show={showOffcanvas} 
          onHide={handleClose} 
          placement="end"
          className="bg-dark text-light"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title className="fw-bold">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleNavClick('home')} className={`mb-2 py-2 ${activeSection === 'home' ? 'fw-bold text-primary' : ''}`}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('about')} className={`mb-2 py-2 ${activeSection === 'about' ? 'fw-bold text-primary' : ''}`}>About</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('services')} className={`mb-2 py-2 ${activeSection === 'services' ? 'fw-bold text-primary' : ''}`}>Services</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('projects')} className={`mb-2 py-2 ${activeSection === 'projects' ? 'fw-bold text-primary' : ''}`}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('experience')} className={`mb-2 py-2 ${activeSection === 'experience' ? 'fw-bold text-primary' : ''}`}>Experience</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('education')} className={`mb-2 py-2 ${activeSection === 'education' ? 'fw-bold text-primary' : ''}`}>Education</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('contact')} className={`mb-2 py-2 ${activeSection === 'contact' ? 'fw-bold text-primary' : ''}`}>Contact</Nav.Link>
            </Nav>
            <hr />
			{/*
            <Button 
              variant={darkMode ? "outline-light" : "outline-dark"} 
              onClick={toggleDarkMode}
              className="d-flex align-items-center mt-3 w-100"
            >
              {darkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>*/}
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;