import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

import AnimatedBackground from "../components/AnimatedBackground";
import vaImg from '../assets/va.png';
import temsImg from '../assets/tems.png';
import ctoImg from '../assets/cto.png';
import portImg from '../assets/port.png';
import cqcImg from '../assets/cqc.png';
import wslImg from '../assets/wsl.png';
import eCom from '../assets/ecommerce.png';
import gHub from '../assets/gighub.png';

const Projects = () => {
  const projects = [
     {
      id: 1,
      title: 'Portfolio',
      description:
        'A responsive portfolio site built with a modern tech stack showcasing my full stack engineering skills and competencies.',
      technologies: ['React', 'Node.js', 'Framer Motion', 'EmailJs'],
      github: 'https://github.com/jimmi0623/portfolio',
      demo: null,
      image: portImg,
    },
     {
      id: 2,
      title: 'E-commerce',
      description:
        'A Fully functional e-commerce app with Mpesa payment intergration.',
      technologies: ['React + NodeJs', 'SQL.Js', 'Vite', 'Zustand','ExpressJs'],
      github: '',
      demo: null,
      image: eCom,
    },
     {
      id: 3,
      title: 'GigHub',
      description:
        'A SaaS site that connects Gigworkers to clients.',
      technologies: ['React', 'Node.js', 'Typescript', 'PostgreSQL'],
      github: '',
      demo: null,
      image: gHub,
    },	
    {
      id: 4,
      title: 'Video Annotator',
      description:
        'A web-based tool for annotating videos frame by frame with customizable labels & metadata export, YOLOv8 Integration, Object Tracking, SAM Integration & Batch processing.',
      technologies: ['Node.js', 'OpenCV', 'FastAPI', 'Python'],
      github: 'https://github.com/jimmi0623/video-annotator',
      demo: 'https://video-annotator.vercel.app',
      image: vaImg,
    },
    {
      id: 5,
      title: 'Ticketing and Events Platform',
      description:
        'A ticketing and event management platform supporting user authentication and real-time booking.',
      technologies: ['React', 'Node.js', 'Express', 'RabbitMQ', 'MySQL'],
      github: 'https://github.com/jimmi0623/ticketing-platform',
      demo: 'https://ticketing-platform.vercel.app',
      image: temsImg,
    },
    {
      id: 6,
      title: 'Caption Timing Optimizer',
      description:
        'An intelligent tool for automatically adjusting subtitle and caption timings for better synchronization.',
      technologies: ['Python', 'Django', 'TensorFlow'],
      github: 'https://github.com/jimmi0623/caption_timing_optimizer',
      demo: null,
      image: ctoImg,
    },
	{
      id: 7,
      title: 'Docker and wsl repair script',
      description:
        'Automation - a powershell script that troubleshoots and repairs common errors on Docker and Windows Subsystem for Linux common.',
      technologies: ['Powershell', 'Docker', 'wsl'],
      github: 'https://github.com/jimmi0623/caption_timing_optimizer',
      demo: null,
      image: wslImg,
    },

    {
      id: 8,
      title: 'Video Caption Quality Checker',
      description:
        'AI-powered caption quality checker that detects timing errors, overlaps, and readability issues in subtitles.',
      technologies: ['Python', 'OpenAI API', 'Flask'],
      github: 'https://github.com/jimmi0623/video-caption-quality-checker',
      demo: null,
      image: cqcImg,
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
                My Projects
              </h2>
              <p className="lead" style={{ color: '#9ca3af' }}>
                Check out some of my recent work ✨
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Project Cards */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow:
                    '0 0 25px rgba(0,191,255,0.35), 0 0 60px rgba(0,191,255,0.25)',
                }}
              >
                <Card
                  className="h-100 border-0 overflow-hidden position-relative text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 12px rgba(0,191,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {/* Card Image */}
                  <div
                    className="overflow-hidden"
                    style={{
                      height: '200px',
                      position: 'relative',
                      zIndex: 1,
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid h-100 w-100 object-fit-cover"
                      whileHover={{
                        scale: 1.08,
                        filter: 'brightness(1.1)',
                      }}
                      transition={{ duration: 0.5 }}
                      style={{
                        filter: 'brightness(0.85)',
                        transition: 'all 0.4s ease',
                      }}
                    />
                  </div>

                  {/* Card Body */}
                  <Card.Body
                    className="d-flex flex-column align-items-center text-center p-4"
                    style={{ position: 'relative', zIndex: 2 }}
                  >
                    <Card.Title
                      className="fw-bold mb-2"
                      style={{
                        color: '#e2e8f0',
                        fontSize: '1rem',
                        textTransform: 'capitalize',
                      }}
                    >
                      {project.title}
                    </Card.Title>

                    <Card.Text
                      className="mb-3"
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.55',
                        color: '#cbd5e1',
                      }}
                    >
                      {project.description}
                    </Card.Text>

                    {/* Technologies */}
                    <div className="mb-4 d-flex flex-wrap justify-content-center">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            bg="dark"
                            className="me-2 mb-2 rounded-pill px-2 py-1"
                            style={{
                              color: '#00e0ff',
                              border: '1px solid rgba(0,191,255,0.45)',
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              background: 'rgba(0,191,255,0.05)',
                              boxShadow: '0 0 8px rgba(0,191,255,0.1)',
                            }}
                          >
                            {tech}
                          </Badge>
                        </motion.span>
                      ))}
                    </div>

                    {/* GitHub Button */}
                    <motion.div whileHover={{ scale: 1.15 }}>
                      <Button
                        href={project.github}
                        variant="outline-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#00d4ff',
                          borderColor: 'rgba(0,191,255,0.5)',
                          background: 'rgba(0,191,255,0.08)',
                          boxShadow: '0 0 10px rgba(0,191,255,0.2)',
                          borderRadius: '50%',
                          width: '42px',
                          height: '42px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            'linear-gradient(90deg, rgba(0,191,255,0.15), rgba(0,255,255,0.25))';
                          e.currentTarget.style.color = '#bffaff';
                          e.currentTarget.style.boxShadow =
                            '0 0 25px rgba(0,255,255,0.45)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            'rgba(0,191,255,0.08)';
                          e.currentTarget.style.color = '#00d4ff';
                          e.currentTarget.style.boxShadow =
                            '0 0 10px rgba(0,191,255,0.2)';
                        }}
                      >
                        <FaGithub size={18} />
                      </Button>
                    </motion.div>
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

export default Projects;