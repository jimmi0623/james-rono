import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import AnimatedBackground from "../components/AnimatedBackground"; 

const Education = () => {
  const educations = [
    {
      institution: 'Moi University, Eldoret-Kenya',
      degree: 'Bachelor of Science in Information Sciences',
      period: '2015 - 2017',
      description:
        'Specialized in Information Technology. Graduated with honors.',
      courses: [
        'Software Engineering',
        'Data Structures & Algorithms',
        'Artificial Intelligence',
        'Database Management Systems',
        'Systems Analysis & Design',
        'Computer Programming',
      ],
    },
  ];

  return (
    <section
      className="py-5 position-relative"
      style={{
        background: 'linear-gradient(180deg, #0b0e13 0%, #080a0d 100%)',
        color: '#e5e7eb',
      }}
    >
	<AnimatedBackground />
      <Container>
        {/* Header */}
        <Row className="mb-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="display-5 fw-bold mb-3 my-style"
                style={{
                  
                  textShadow: '0 0 12px rgba(76,201,240,0.3)',
                  letterSpacing: '1px',
                }}
              >
                Education
              </h2>
              <p className="lead" style={{ color: '#9ca3af', fontSize: '1rem' }}>
                My academic background and qualifications
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Education Cards */}
        <Row className="g-4">
          {educations.map((edu, index) => (
            <Col key={index} xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow:
                    '0 0 25px rgba(0,191,255,0.35), 0 0 50px rgba(0,191,255,0.2)',
                }}
              >
                <Card
                  className="border-0 shadow-sm mb-4 position-relative"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 12px rgba(0,191,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Card.Body className="p-4">
                    <Row className="align-items-start">
                      {/* Left Section */}
                      <Col md={8}>
                        <div className="d-flex align-items-start mb-3 text-start">
                          <div
                            className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                            style={{
                              background: 'rgba(0,191,255,0.15)',
                              color: '#00d4ff',
                              boxShadow:
                                '0 0 10px rgba(0,191,255,0.4), 0 0 20px rgba(0,255,255,0.25)',
                              width: '40px',
                              height: '40px',
                            }}
                          >
                            <FaGraduationCap size={18} />
                          </div>
                          <div>
                            <h3
                              className="fw-bold mb-1 text-start"
                              style={{ fontSize: '1rem', color: '#e2e8f0' }}
                            >
                              {edu.degree}
                            </h3>
                            <p
                              className="mb-0 text-start"
                              style={{
                                color: '#00d4ff',
                                fontSize: '0.9rem',
                                textShadow: '0 0 8px rgba(0,191,255,0.3)',
                              }}
                            >
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {edu.description && (
                          <p
                            className="mb-3 text-start"
                            style={{
                              color: '#cbd5e1',
                              fontSize: '0.85rem',
                              lineHeight: '1.6',
                            }}
                          >
                            {edu.description}
                          </p>
                        )}

                        {edu.courses && edu.courses.length > 0 && (
                          <div className="mb-2 text-start">
                            <p
                              className="fw-bold mb-2"
                              style={{
                                color: '#00e0ff',
                                fontSize: '0.85rem',
                                textShadow:
                                  '0 0 8px rgba(0,191,255,0.3)',
                              }}
                            >
                              Key Courses:
                            </p>
                            {edu.courses.map(
                              (course, idx) =>
                                course && (
                                  <Badge
                                    key={idx}
                                    bg="dark"
                                    className="me-2 mb-2 px-3 py-2"
                                    style={{
                                      color: '#00e0ff',
                                      border: '1px solid rgba(0,191,255,0.4)',
                                      background: 'rgba(0,191,255,0.05)',
                                      fontSize: '0.75rem',
                                      borderRadius: '0.4rem',
                                      boxShadow:
                                        '0 0 8px rgba(0,191,255,0.15)',
                                    }}
                                  >
                                    {course}
                                  </Badge>
                                )
                            )}
                          </div>
                        )}
                      </Col>

                      {/* Right Section - Period */}
                      <Col
                        md={4}
                        className="d-flex justify-content-md-end align-items-start"
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{
                            color: '#9ca3af',
                            fontSize: '0.8rem',
                          }}
                        >
                          <FaCalendarAlt className="me-2 text-info" />
                          <span>{edu.period}</span>
                        </div>
                      </Col>
                    </Row>
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

export default Education;