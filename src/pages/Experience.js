import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import AnimatedBackground from "../components/AnimatedBackground"; 

const Experience = () => {
  const experiences = [
    {
      company: 'JR Technologies',
      position: 'Full Stack Developer',
      period: 'Jan 2020 – Present',
      description:
        'Design, develop, and deploy scalable web applications integrating AI-driven tools and automation workflows.',
      achievements: [
        'Architected and deployed scalable full-stack web applications using modern stack and tools',
        'Integrated APIs, databases, and third-party services to deliver seamless, data-driven user experiences',
        'Optimized application performance, security, and code quality through testing and CI/CD automation',
        'Collaborated with cross-functional teams to design, build, and maintain end-to-end software solutions',
      ],
    },
    {
      company: 'Apollo Agriculture',
      position: 'AI Evaluator & Data Annotator',
      period: 'Apr 2025 – Jul 2025',
      description:
        'Evaluated AI-generated farmer advisories and improved model accuracy through dataset refinement.',
      achievements: [
        'Improved model precision by 10% through targeted dataset enhancements',
        'Refined prompt templates for agronomic classification and forecasting',
        'Collaborated with ML engineers to ensure high-quality AI outputs',
      ],
    },
    {
      company: 'Office of the Data Protection Commissioner',
      position: 'AI Evaluator',
      period: 'Feb 2024 – May 2024',
      description:
        'Supported the rollout of the “Linda Data” chatbot by localizing datasets and evaluating AI responses.',
      achievements: [
        'Localized Swahili training data for improved chatbot performance',
        'Conducted QA testing and feedback loops for AI model responses',
        'Enhanced language coverage and accuracy across multiple user scenarios',
      ],
    },
    {
      company: 'Kuzi Project',
      position: 'AI Data Contributor',
      period: 'Sep 2024 – Nov 2024',
      description:
        'Contributed to locust forecasting AI models through geospatial and satellite imagery annotation.',
      achievements: [
        'Boosted model precision by 12% via accurate dataset labeling',
        'Annotated satellite and geospatial data using Label Studio and QGIS',
        'Supported model validation and consistency checks for agricultural forecasting',
      ],
    },
  ];

  const summarized = [
    { company: 'Safaricom Plc', position: 'Data Analyst', period: 'Oct 2014 – 2020' },
    { company: 'Kenya National Bureau of Statistics', position: 'Research Assistant', period: 'Apr 2011 – Jul 2014' },
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
        {/* Section Header */}
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
                Work Experience
              </h2>
              <p className="lead" style={{ color: '#9ca3af', fontSize: '1rem' }}>
                My professional journey and accomplishments
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Timeline */}
        <div className="position-relative">
          <div
            className="position-absolute h-100"
            style={{
              left: '20px',
              width: '2px',
              background:
                'linear-gradient(to bottom, rgba(0,191,255,0.8), rgba(0,255,255,0.1))',
              boxShadow: '0 0 15px rgba(0,191,255,0.3)',
              zIndex: 0,
              borderRadius: '4px',
            }}
          ></div>

          <Row className="g-4">
            {/* First four detailed experiences */}
            {experiences.map((exp, index) => (
              <Col key={index} xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    boxShadow:
                      '0 0 25px rgba(0,191,255,0.35), 0 0 50px rgba(0,191,255,0.2)',
                  }}
                >
                  <Card
                    className="border-0 shadow-sm mb-4 ms-4 position-relative"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '1rem',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 0 12px rgba(0,191,255,0.05)',
                      backdropFilter: 'blur(12px)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className="position-absolute bg-info rounded-circle text-white d-flex align-items-center justify-content-center"
                      style={{
                        left: '-22px',
                        top: '28px',
                        width: '28px',
                        height: '28px',
                        boxShadow:
                          '0 0 12px rgba(0,191,255,0.5), 0 0 24px rgba(0,255,255,0.25)',
                      }}
                    >
                      <FaBriefcase size={14} />
                    </div>

                    <Card.Body className="p-4">
                      <Row className="align-items-start">
                        <Col md={8}>
                          <div className="mb-2 text-start">
                            <h3
                              className="fw-bold mb-1 text-start"
                              style={{ fontSize: '1.1rem', color: '#e2e8f0' }}
                            >
                              {exp.position}
                            </h3>
                            <p
                              className="mb-0 text-start"
                              style={{
                                color: '#00d4ff',
                                fontSize: '0.9rem',
                                textShadow: '0 0 8px rgba(0,191,255,0.3)',
                              }}
                            >
                              {exp.company}
                            </p>
                          </div>
                          <p
                            className="mb-2 text-start"
                            style={{
                              color: '#cbd5e1',
                              fontSize: '0.85rem',
                              lineHeight: '1.6',
                            }}
                          >
                            {exp.description}
                          </p>
                        </Col>

                        <Col
                          md={4}
                          className="d-flex justify-content-md-end align-items-start"
                        >
                          <div
                            className="d-flex align-items-center"
                            style={{ color: '#9ca3af', fontSize: '0.8rem' }}
                          >
                            <FaCalendarAlt className="me-2 text-info" />
                            <span>{exp.period}</span>
                          </div>
                        </Col>
                      </Row>

                      <div className="mt-3">
                        <div className="d-flex align-items-center mb-2">
                          <FaTrophy
                            className="me-2"
                            style={{
                              color: '#facc15',
                              filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.4))',
                            }}
                          />
                          <h4
                            className="fw-bold mb-0"
                            style={{
                              fontSize: '0.95rem',
                              color: '#fcd34d',
                            }}
                          >
                            Key Achievements
                          </h4>
                        </div>
                        <ListGroup variant="flush">
                          {exp.achievements.map((achievement, idx) => (
                            <ListGroup.Item
                              key={idx}
                              className="border-0 ps-0 py-1 bg-transparent"
                              style={{
                                color: '#cbd5e1',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'flex-start',
                              }}
                            >
                              <span
                                style={{
                                  color: '#00e0ff',
                                  marginRight: '8px',
                                  lineHeight: '1.3',
                                }}
                              >
                                •
                              </span>
                              {achievement}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}

            {/* Summarized older experience */}
            <Col xs={12}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <Card
                  className="border-0 shadow-sm mb-4 ms-4 position-relative"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 12px rgba(0,191,255,0.05)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="position-absolute bg-info rounded-circle text-white d-flex align-items-center justify-content-center"
                    style={{
                      left: '-22px',
                      top: '28px',
                      width: '28px',
                      height: '28px',
                      boxShadow:
                        '0 0 12px rgba(0,191,255,0.5), 0 0 24px rgba(0,255,255,0.25)',
                    }}
                  >
                    <FaBriefcase size={14} />
                  </div>
                  <Card.Body className="p-4">
                    <h5
                      className="fw-semibold mb-3"
                      style={{ color: '#00d4ff', fontSize: '1rem' }}
                    >
                      Other Experiences
                    </h5>
                    {summarized.map((exp, idx) => (
                      <p key={idx} style={{ marginBottom: '0.4rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                        <strong>{exp.position}</strong>, {exp.company} 
                      </p>
                    ))}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;