
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section position-relative overflow-hidden min-vh-100 d-flex align-items-center">
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center text-center py-5">
          <Col md={8}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="display-4 fw-bold mb-4">
                <span className="d-block">Hi, I'm</span>
                <motion.span 
                  className="text-primary"
                  animate={{ 
                    textShadow: [
                      '0 0 5px rgba(13, 110, 253, 0.3)',
                      '0 0 15px rgba(13, 110, 253, 0.5)',
                      '0 0 5px rgba(13, 110, 253, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Full Stack Developer
                </motion.span>
              </h1>
              <p className="lead mb-5">
                I build responsive, user-friendly web applications with modern technologies.
                Let's work together to bring your ideas to life.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button as={Link} to="/projects" variant="primary" size="lg" className="d-flex align-items-center justify-content-center gap-2">
                    View My Work <FaArrowRight />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button as={Link} to="/contact" variant="outline-primary" size="lg">
                    Contact Me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

