import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaDesktop, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom, responsive &amp; SEO websites built with modern frameworks',
      icon: <FaCode size={40} />,
      color: '#4361ee'
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Robust server-side applications using Node.js, Express, and other technologies.',
      icon: <FaServer size={40} />,
      color: '#3a0ca3'
    },
    {
      id: 3,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work seamlessly across all devices and screen sizes.',
      icon: <FaMobileAlt size={40} />,
      color: '#7209b7'
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Efficient database architecture using SQL and NoSQL technologies.',
      icon: <FaDatabase size={40} />,
      color: '#f72585'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces with focus on user experience and accessibility.',
      icon: <FaDesktop size={40} />,
      color: '#4cc9f0'
    },
    {
      id: 6,
      title: 'API Integration',
      description: 'Seamless API Integrations e.g. Payments, Analytics, Social etc.',
      icon: <FaRocket size={40} />,
      color: '#4895ef'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="display-5 fw-bold mb-3 my-style">My Services</h2>
              <p className="">Specialized solutions to help your business grow</p>
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
                whileHover={{ y: -10 }}
              >
                <Card className="h-100 border-0 shadow-sm text-center p-3">
                  <div className="d-flex justify-content-center mb-4">
                    <motion.div 
                      className="rounded-circle p-3 d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: `${service.color}20`, width: '100px', height: '100px' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white" style={{ color: service.color }}>
                        {service.icon}
                      </div>
                    </motion.div>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-5 mb-2 text-secondary">{service.title}</Card.Title>
                    <Card.Text 
					className="text-muted"
					style={{fontSize: '0.8rem'}}
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