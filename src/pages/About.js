import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap';
import { FaCogs, FaBrain } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const technicalSkills = {
    'Front-End': [
      'HTML', 'CSS', 'JavaScript', 'TypeScript',
      'Bootstrap', 'Tailwind CSS', 'React-Bootstrap', 'Material Design',
      'React.js', 'Figma',
    ],
    'Back-End': ['Node.js', 'Express.js', 'PHP', 'Python/Django'],
    'Databases': ['MySQL', 'MongoDB', 'SQLite'],
    'Data Formats & APIs': ['JSON', 'RESTful APIs', 'GraphQL'],
    'CI/CD & DevOps': [
      'GitHub Actions', 'Docker', 'Linux', 'Bash (CLI)',
      'CI', 'Deployment Automation',
    ],
    'Version Control & IDEs': ['Git', 'GitHub', 'VS Code'],
    'AI / ML Frameworks': ['TensorFlow', 'LangChain', 'OpenAI API'],
    'AI-Powered Coding Tools': [
      'GitHub Copilot', 'Cursor', 'Claude Code', 'Warp',
    ],
    'AI Annotation Tools': ['Label Studio', 'Prodigy', 'Jupyter Notebooks', 'QGIS'],
    'Productivity & Collaboration': ['Office 365', 'Google Workspace','Jira'],
  };

  const softSkills = [
    'Problem-Solving',
    'Adaptability',
    'Collaboration',
    'Analytical Thinking',
    'Communication',
  ];

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top, #0d0f13 0%, #0a0c10 100%)',
        color: '#e0e0e0',
      }}
    >
      <Container>
        {/* ABOUT HEADER */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-6 fw-bold my-style mb-3">About Me</h2>
          <p className="lead  mb-0">
            Full Stack Developer • AI Integrator • Creative Technologist
          </p>
        </motion.div>

        {/* ABOUT CONTENT */}
        <Row className="align-items-center g-4 mb-5">
          <Col md={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative d-inline-block"
              style={{ borderRadius: '50%', padding: '10px' }}
            >
              {/* Neon glowing rotating border */}
              <div
                className="neon-ring position-absolute top-50 start-50 translate-middle"
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  border: '3px solid transparent',
                  background:
                    'linear-gradient(60deg, #00bfff, #007bff, #00ffcc, #007bff)',
                  backgroundSize: '300% 300%',
                  filter: 'drop-shadow(0 0 15px #00bfff)',
                  animation: 'spin 6s linear infinite, glow 4s ease-in-out infinite',
                }}
              />
              <Image
                src="/profilepic.jpg"
                roundedCircle
                alt="Profile"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  border: '3px solid rgba(255,255,255,0.06)',
                  zIndex: 2,
                  position: 'relative',
                }}
              />
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card
                className="border-0 shadow-sm p-4"
                style={{
                  background: 'rgba(24, 27, 32, 0.8)',
                  borderRadius: '1rem',
                  boxShadow: '0 0 25px rgba(13,110,253,0.15)',
                }}
              >
                <Card.Body>
                  <p className="lead text-light mb-2">
                    AI-first Full Stack Developer passionate about integrating AI and ML workflows into the SDLC to build smarter and ship faster. I bridge traditional full stack development with modern AI tools to deliver scalable, intelligent, and efficient applications.
I leverage AI-powered tools  to accelerate development and enhance code quality.</p>
                  <p className="text-secondary mb-1">
                    I specialize in front-end and back-end development, DevOps,
                    and AI integration — helping startups and businesses turn
                    complex ideas into production-ready solutions.
                  </p>
<p className="text-secondary mb-1">
 Beyond development, I’m intrested in AI evaluation, data annotation, and model training — ensuring fairness, accuracy, and continuous learning in AI systems.</p>

                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* SKILLS & STRENGTHS */}
        <Row className="g-4">
          {/* Technical Skills */}
          <Col lg={6}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
<Card
  className="border-0 shadow-sm h-100"
  style={{
    background: 'rgba(24,27,32,0.85)',
    borderRadius: '1rem',
    boxShadow: '0 0 25px rgba(0,191,255,0.2)',
  }}
>
  <Card.Body className="p-4 p-md-5">
    <div className="d-flex align-items-center mb-4">
      <FaCogs className="text-primary me-3" size={30} />
      <h3 className="fw-bold text-primary mb-0">Technical Skills</h3>
    </div>

    {Object.entries(technicalSkills).map(([category, items], idx) => (
      <div key={idx} className="mb-4">
        <h5
          className="fw-semibold mb-2 text-start"
          style={{
            color: '#00bfff',
            fontSize: '1.05rem',
            textShadow: '0 0 8px rgba(0,191,255,0.6)',
            borderLeft: '3px solid rgba(0,191,255,0.6)',
            paddingLeft: '0.75rem',
            marginBottom: '0.6rem',
          }}
        >
          {category}
        </h5>

        <div className="d-flex flex-wrap gap-2 ps-2">
          {items.map((item, i) => (
            <Badge
              key={i}
              bg="dark"
              className="py-1 px-3 skill-badge"
              style={{
                color: '#00d4ff',
                border: '1px solid rgba(0,191,255,0.45)',
                borderRadius: '0.4rem',
                fontWeight: 500,
                fontSize: '0.8rem',
                letterSpacing: '0.3px',
                background: 'rgba(0,191,255,0.05)',
                boxShadow: '0 0 8px rgba(0,191,255,0.1)',
                transition: 'all 0.24s ease-in-out',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(90deg, rgba(0,191,255,0.15), rgba(0,255,204,0.18))';
                e.currentTarget.style.color = '#80f7ff';
                e.currentTarget.style.boxShadow =
                  '0 0 14px rgba(0,255,204,0.35)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,191,255,0.05)';
                e.currentTarget.style.color = '#00d4ff';
                e.currentTarget.style.boxShadow =
                  '0 0 8px rgba(0,191,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    ))}
  </Card.Body>
</Card>
            </motion.div>
          </Col>

          {/* Soft Skills */}
          <Col lg={6}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{
                  background: 'rgba(24,27,32,0.85)',
                  borderRadius: '1rem',
                  boxShadow: '0 0 25px rgba(13,202,240,0.25)',
                }}
              >
                <Card.Body className="p-4 p-md-5 d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center mb-4">
                    <FaBrain className="text-info me-3" size={30} />
                    <h3 className="fw-bold text-info mb-0">Soft Skills</h3>
                  </div>

                  <div className="w-100 d-flex flex-wrap justify-content-center gap-3 mt-3">
                    {softSkills.map((skill, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.08 }} transition={{ duration: 0.18 }}>
                        <Badge
                          bg="dark"
                          className="py-2 px-4"
                          style={{
                            color: '#0dcaf0',
                            border: '1px solid rgba(13,202,240,0.4)',
                            borderRadius: '0.75rem',
                            fontWeight: 600,
                            fontSize: '1rem',
                            boxShadow: '0 0 10px rgba(13,202,240,0.12)',
                            transition: 'all 0.24s cubic-bezier(.2,.9,.2,1)',
                            cursor: 'default',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              'linear-gradient(90deg, rgba(13,202,240,0.08), rgba(0,255,255,0.12))';
                            e.currentTarget.style.color = '#7be9ff';
                            e.currentTarget.style.boxShadow =
                              '0 0 16px rgba(0,255,255,0.28)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#0dcaf0';
                            e.currentTarget.style.boxShadow = '0 0 10px rgba(13,202,240,0.12)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Local keyframes for neon animations */}
      <style>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.75; }
        }

        /* Improve badge wrapping on very small screens */
        .skill-badge {
          white-space: nowrap;
        }

        /* Make sure the neon ring stays behind image and centered */
        .neon-ring {
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default About;