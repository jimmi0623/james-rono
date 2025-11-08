import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaCodeBranch, FaCloudUploadAlt, FaShoppingCart, FaCreditCard
} from 'react-icons/fa';
import AnimatedBackground from "../components/AnimatedBackground"; 

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Web Applications',
      description:
        'We build high-performance web solutions using React, Node.js, and modern frameworks—tailored to your business needs, scalable, and cloud-ready.',
      icon: <FaCodeBranch size={40} />,
      color: '#007BFF'
    },
    {
      id: 2,
      title: 'E-Commerce & Portfolio Websites',
      description:
        'Beautiful, responsive online stores and personal portfolio sites optimized for conversion, performance, and SEO visibility.',
      icon: <FaShoppingCart size={40} />,
      color: '#6C63FF'
    },
    {
      id: 3,
      title: 'Payment API Integration',
      description:
        'Seamless and secure integration with major payment gateways including M-Pesa, Stripe, and Paystack—built with reliability and compliance in mind.',
      icon: <FaCreditCard size={40} />,
      color: '#48CAE4'
    },
    {
      id: 4,
      title: 'SEO & Cloud Optimization',
      description:
        'Boost your visibility and performance through technical SEO, analytics, and optimized hosting on Vercel, AWS, or Azure with CI/CD pipelines.',
      icon: <FaCloudUploadAlt size={40} />,
      color: '#3A0CA3'
    }
  ];

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <AnimatedBackground />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="mb-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="display-5 fw-bold mb-3"
                style={{
                  letterSpacing: '1px',
                  textShadow: '0 0 10px rgba(76,201,240,0.2)'
                }}
              >
                My Services
              </h2> {/* ✅ properly closed */}
              <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
                Specialized solutions to help your business grow 🚀
              </p>
            </motion.div>
          </Col>
        </Row>

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
                    transition: 'all 0.4s ease'
                  }}
                >
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
