import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/jimmi0623", color: "#333" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/jimmi0623", color: "#0077B5" },
    { icon: <FaXTwitter />, url: "https://x.com/JimmiRonno", color: "#000000" },
   
    { icon: <FaDiscord />, url: "https://discord.com/channels/mijj0623", color: "#5865f2" }
  ];
  
  return (
    <footer className="py-4 mt-5 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} James Rono. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fs-4 social-icon"
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    color: social.color
                  }}
                  initial={{ color: "#fff" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300
                  }}
                  style={{ 
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)"
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;