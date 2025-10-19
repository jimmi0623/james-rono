import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaBrain, FaCodeBranch, FaCloudUploadAlt, FaNetworkWired,
  FaChartLine, FaPalette, FaLock, FaCogs
} from 'react-icons/fa';
import AnimatedBackground from "../components/AnimatedBackground"; 

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'AI-Powered Web Solutions',
      description: 'Next-gen web apps that leverage AI APIs, LLMs, and smart automation for personalized user experiences.',
      icon: <FaBrain size={40} />,
      color: '#6C63FF'
    },
    {
      id: 2,
      title: 'Full-Stack Application Engineering',
      description: 'End-to-end development using React, Node.js, and cloud-native architectures optimized for scalability and speed.',
      icon: <FaCodeBranch size={40} />,
      color: '#007BFF'
    },
    {
      id: 3,
      title: 'Cloud & DevOps Integration',
      description: 'CI/CD pipelines, Docker, and cloud deployments (AWS, Vercel, Azure) for continuous delivery and uptime reliability.',
      icon: <FaCloudUploadAlt size={40} />,
      color: '#00B4D8'
    },
    {
      id: 4,
      title: 'Next-Gen API & Microservices',
      description: 'High-performance APIs, GraphQL, and microservice design for modular, maintainable systems.',
      icon: <FaNetworkWired size={40} />,
      color: '#3A0CA3'
    },
    {
      id: 5,
      title: 'Data-Driven Interfaces & Dashboards',
      description: 'Interactive dashboards, real-time analytics, and data visualizations powered by React and D3.js.',
      icon: <FaChartLine size={40} />,
      color: '#4CC9F0'
    },
    {
      id: 6,
      title: 'UI/UX Innovation & Design Systems',
      description: 'Human-centered design, component libraries, and accessibility-first interfaces built with Figma & Tailwind CSS.',
      icon: <FaPalette size={40} />,
      color: '#F72585'
    },
    {
      id: 7,
      title: 'Secure & Scalable Backend Systems',
      description: 'Modern backend infrastructure with JWT auth, API rate-limiting, and cloud-level data security.',
      icon: <FaLock size={40} />,
      color: '#4895EF'
    },
    {
      id: 8,
      title: 'Automation & Integration Services',
      description: 'Integrations with 3rd-party APIs, AI assistants, payments, and business automation workflows.',
      icon: <FaCogs size={40} />,
      color: '#48CAE4'
    }
  ];

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'transparent',
      }}
    >
      <AnimatedBackground /> {/* ✅ stays behind content */}

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <Row className="mb-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="display-5 fw-bold mb-3 my-style"
                style={{
                 
                  letterSpacing: '1px',
                  textShadow: '0 0 10px rgba(76,201,240,0.2)'
                }}
              >
                My Services
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
                Specialized solutions to help your business grow 🚀
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Cards */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: service.id * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card
                  className="h-100 text-center p-4 position-relative"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {/* Neon Glow on Hover */}
                  <motion.div
                    className="position-absolute w-100 h-100 rounded-4"
                    style={{
                      top: 0,
                      left: 0,
                      zIndex: 0,
                      borderRadius: '1rem',
                      boxShadow: `0 0 0px ${service.color}`,
                      transition: 'box-shadow 0.4s ease'
                    }}
                    whileHover={{
                      boxShadow: `0 0 25px ${service.color}70, 0 0 50px ${service.color}50`
                    }}
                  />

                  <motion.div
                    className="mx-auto mb-4 rounded-circle p-4 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: `${service.color}15`,
                      width: '90px',
                      height: '90px',
                      position: 'relative',
                      zIndex: 1
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div style={{ color: service.color }}>{service.icon}</div>
                  </motion.div>

                  <Card.Body style={{ position: 'relative', zIndex: 1 }}>
                    <Card.Title
                      className="fw-semibold mb-3"
                      style={{
                        color: '#e2e8f0',
                        fontSize: '1.05rem',
                        textTransform: 'capitalize'
                      }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        lineHeight: '1.5'
                      }}
                    >
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;