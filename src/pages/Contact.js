import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
/*import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';*/
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDiscord
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/jimmi0623", color: "#333" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/jimmi0623", color: "#0077B5" },
  { icon: <FaXTwitter />, url: "https://x.com/JimmiRonno", color: "#000000" },

  { icon: <FaDiscord />, url: "https://discord.com/channels/mijj0623", color: "#5865F2" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Hi, kindly reach me via my e-mail, phone or social. Thank you!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 my-style">Contact Me</h2>
            <p className="lead  ">Have a question or want to work together?</p>
          </Col>
        </Row>
        
        <Row className="g-5">
          <Col lg={7}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
<Card className="shadow-sm border-0">
  <Card.Body className="p-4 p-md-5">
    <Form onSubmit={handleSubmit} className="text-start">
      <Form.Group className="mb-2" controlId="name">
        <Form.Label className="text-start d-block fw-semibold">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="email">
        <Form.Label className="text-start d-block fw-semibold">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label className="text-start d-block fw-semibold">Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
      </Form.Group>

      {/* Centered Button */}
      <div className="text-center">
        <Button variant="primary" type="submit" size="md">
          Send Message
        </Button>
      </div>
    </Form>
  </Card.Body>
</Card>
            </motion.div>
          </Col>
          
          <Col lg={5}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
			
    <Card className="shadow-sm border-0 h-100 rounded-4">
      <Card.Body className="p-3 p-md-4">
        <h5 className="fw-bold mb-3 text-primary">Contact Information</h5>
        <p className="text-muted mb-4">
          Feel free to reach out directly or connect with me on any of the platforms below.
        </p>

        {/* Contact Details */}
        <div className="d-flex flex-column gap-4 text-start">
          {/* Email */}
          <div className="d-flex align-items-center">
            <FaEnvelope className="text-primary fs-5 me-3 flex-shrink-0" />
            <div>
              <div className="fw-semibold text-dark">Email</div>
              <a
                href="mailto:ronojames@proton.me"
                className="text-decoration-none text-muted"
              >
                ronojames@proton.me
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="d-flex align-items-center">
            <FaPhone className="text-primary fs-5 me-3 flex-shrink-0" />
            <div>
              <div className="fw-semibold text-dark">Phone</div>
              <a
                href="tel:+254788923238"
                className="text-decoration-none text-muted"
              >
                (+254) 788 923 238
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt className="text-primary fs-5 me-3 flex-shrink-0" />
            <div>
              <div className="fw-semibold text-dark">Location</div>
              <span className="text-muted">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Social Links */}
        <div className="text-start">
          <h6 className="fw-bold text-dark mb-3">Connect With Me</h6>
          <div className="d-flex flex-wrap align-items-center gap-3">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: link.color,
                  fontSize: "1.5rem",
                  transition: "transform 0.2s ease, opacity 0.2s ease"
                }}
                className="text-decoration-none"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                  e.currentTarget.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;