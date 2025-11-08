import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaGlobe
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedBackground from "../components/AnimatedBackground"; 

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/jimmi0623", color: "#00d4ff" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/jimmi0623", color: "#0077B5" },
  { icon: <FaXTwitter />, url: "https://x.com/JimmiRonno", color: "#1DA1F2" },
  { icon: <FaDiscord />, url: "https://discord.com/channels/mijj0623", color: "#5865F2" },
  { icon: <FaGlobe />, url: "https://james-rono.vercel.app", color: "#00e0ff" } // Website link
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitStatus({ show: false, success: false, message: '' });
    
    try {
      await emailjs.sendForm(
        'service_5yu89zk', // service ID
        'template_dzxyybb', // template ID (correct this!)
        form.current,
        'bMhHlKK6bzTtk6sEo' // public key
      );
      
      setSubmitStatus({
        show: true,
        success: true,
        message: 'Message sent successfully! Thank you for reaching out.'
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Failed to send message. Please contact me directly via email.'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        color: "#e5e7eb",
        background: "radial-gradient(circle at 10% 20%, #050608 0%, #0a0d12 100%)",
      }}
    >
	<AnimatedBackground />
      {/* Ambient animated background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0,191,255,0.1), transparent 70%)",
            "radial-gradient(circle at 100% 100%, rgba(0,255,255,0.15), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(0,191,255,0.1), transparent 70%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          filter: "blur(60px)",
          opacity: 0.7,
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="mb-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="display-5 fw-bold mb-3 my-style"
              
              >
                Contact Me
              </h2>
              <p className="lead" style={{ color: "#9ca3af" }}>
                Have a question or want to work together?
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Contact Form */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                boxShadow: "0 0 25px rgba(0,255,255,0.5)",
                y: -5,
              }}
            >
              <Card
                className="border-0 rounded-4 shadow-sm neon-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,191,255,0.15)",
                  boxShadow: "0 0 15px rgba(0,191,255,0.1)",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                <Card.Body className="p-4 p-md-5">
                  <Form ref={form} onSubmit={handleSubmit} className="text-start">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label className="fw-semibold" style={{ color: "#a0aec0" }}>
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-transparent text-light border-0 border-bottom rounded-0"
                        style={{
                          borderBottom: "1px solid rgba(0,191,255,0.3)",
                          boxShadow: "none",
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className="fw-semibold" style={{ color: "#a0aec0" }}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-transparent text-light border-0 border-bottom rounded-0"
                        style={{
                          borderBottom: "1px solid rgba(0,191,255,0.3)",
                          boxShadow: "none",
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label className="fw-semibold" style={{ color: "#a0aec0" }}>
                        Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-transparent text-light border-0 border-bottom rounded-0"
                        style={{
                          borderBottom: "1px solid rgba(0,191,255,0.3)",
                          boxShadow: "none",
                        }}
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        variant="outline-info"
                        type="submit"
                        size="sm"
                        className="px-4 py-2 rounded-pill"
                        style={{
                          boxShadow: "0 0 12px rgba(0,191,255,0.4)",
                          color: "#00e5ff",
                          border: "1px solid rgba(0,191,255,0.3)",
                          transition: "0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.boxShadow = "0 0 25px rgba(0,255,255,0.6)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.boxShadow = "0 0 12px rgba(0,191,255,0.4)")
                        }
                        disabled={sending}
                      >
                        {sending ? 'Sending...' : 'Send Message'}
                      </Button>
                      
                      {submitStatus.show && (
                        <div
                          className={`mt-3 text-${submitStatus.success ? 'success' : 'danger'}`}
                          style={{ fontSize: '0.9rem' }}
                        >
                          {submitStatus.message}
                        </div>
                      )}
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Info & Socials */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                boxShadow: "0 0 25px rgba(0,255,255,0.5)",
                y: -5,
              }}
            >
              <Card
                className="h-100 border-0 rounded-4 shadow-sm neon-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,191,255,0.15)",
                  boxShadow: "0 0 20px rgba(0,191,255,0.08)",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                <Card.Body className="p-4 pb-2">
                  <h5 className="fw-bold mb-3" style={{ color: "#00e0ff" }}>
                    Contact Information
                  </h5>
                  <p className="mb-2" style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                    Feel free to reach out directly or connect.
                  </p>

                  <div className="d-flex flex-column gap-4 text-start">
                    <div className="d-flex align-items-center">
                      <FaEnvelope className="me-3 text-info" />
                      <div>
                        <div className="fw-semibold text-light">Email</div>
                        <a
                          href="mailto:ronojames@proton.me"
                          className="text-decoration-none"
                          style={{ color: "#a0aec0" }}
                        >
                          ronojames@proton.me
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <FaPhone className="me-3 text-info" />
                      <div>
                        <div className="fw-semibold text-light">Phone</div>
                        <a
                          href="tel:+254788923238"
                          className="text-decoration-none"
                          style={{ color: "#a0aec0" }}
                        >
                          (+254) 745 143 483
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <FaGlobe className="me-3 text-info" />
                      <div>
                        <div className="fw-semibold text-light">Website</div>
                        <a
                          href="https://james-rono.vercel.app"
                          className="text-decoration-none"
                          style={{ color: "#a0aec0" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          james-rono.vercel.app
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-3 text-info" />
                      <div>
                        <div className="fw-semibold text-light">Location</div>
                        <span style={{ color: "#a0aec0" }}>Nairobi, Kenya</span>
                      </div>
                    </div>
                  </div>

                  <hr className="my-3" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

                  <div className="text-start">
                    <h6 className="fw-bold mb-3" style={{ color: "#00e0ff" }}>
                      Connect With Me
                    </h6>
                    <div className="d-flex flex-wrap align-items-center gap-3">
                      {socialLinks.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-decoration-none"
                          style={{
                            color: link.color,
                            fontSize: "1.5rem",
                            textShadow: `0 0 10px ${link.color}`,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {link.icon}
                        </motion.a>
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