import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Video Annotator',
      description: 'A web-based tool for annotating videos frame by frame with customizable labels & metadata export, YOLOv8 Integration, Object Tracking, SAM Integration & Batch procsessing.',
      technologies: ['Node.js', 'OpenCV', 'FastAPI', 'Python'],
      github: 'https://github.com/jimmi0623/video-annotator',
      demo: 'https://video-annotator.vercel.app',
      image: '/va.png'
    },
    {
      id: 2,
      title: 'Ticketing and Events Platform',
      description: 'A ticketing and event management platform supporting user authentication and real-time booking.',
      technologies: ['React', 'Node.js', 'Express', 'RabbitMQ', 'MySQL'],
      github: 'https://github.com/jimmi0623/ticketing-platform',
      demo: 'https://ticketing-platform.vercel.app',
      image: '/tems.png'
    },
    {
      id: 3,
      title: 'Caption Timing Optimizer',
      description: 'An intelligent tool for automatically adjusting subtitle and caption timings for better synchronization.',
      technologies: ['Python', 'Django', 'TensorFlow'],
      github: 'https://github.com/jimmi0623/caption_timing_optimizer',
      demo: null,
      image: '/cto.png'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'An responsive portfolio site built with modern tech stack  showcasing my Full stack engineer skills and competencies.',
      technologies: ['React', 'react-bootstrap', 'Framer-motion'],
      github: 'https://github.com/jimmi0623/portfolio',
      demo: null,
      image: '/portfolio.png'
    },	
    {
      id: 4,
      title: 'Video Caption Quality Checker',
      description: 'AI-powered caption quality checker that detects timing errors, overlaps, and readability issues in subtitles.',
      technologies: ['Python', 'OpenAI API', 'Flask'],
      github: 'https://github.com/jimmi0623/video-caption-quality-checker',
      demo: null,
      image: '/cqc.png'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 my-style">My Projects</h2>
            <p className="lead">Check out some of my recent work</p>
          </Col>
        </Row>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: project.id * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-100 shadow-sm border-0 overflow-hidden">
                  <div className="overflow-hidden" style={{ height: '200px' }}>
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title} 
                      className="img-fluid h-100 object-fit-cover"
                      style={{ transition: 'transform 0.3s ease' }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-6 text-secondary">{project.title}</Card.Title>
                    <Card.Text className="text-muted mb-3" style={{fontSize: '0.8rem' }}>{project.description}</Card.Text>
                    <div className="mb-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index}
						bg="dark"
						className=" me-2 mb-1 rounded-pill px-1"
						style={{
							color: '#00d4ff',
							border: '1px solid rgba(0,191,255,0.45)',
							borderRadius: '0.4rem',
							fontWeight: 500,
							fontSize: '0.7rem',
							letterSpacing: '0.3px',
							background: 'rgba(0,191,255,0.05)',
							boxShadow: '0 0 8px rgba(0,191,255,0.1)',
							transition: 'all 0.24s ease-in-out',
							cursor: 'default',
						  }}
						>{tech}</Badge>
                      ))}
                    </div>
                    <div className="d-flex gap-3 mt-auto">
                      <Button 
                        href={project.github}
						bg="navy"	
                        variant="outline-dark" 
                        className="flex-grow-1 d-flex align-items-center justify-content-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="me-2" /> GitHub
                      </Button>
					  {/*
                      <Button 
                        href={project.demo} 
                        variant="primary" 
                        className="flex-grow-1 d-flex align-items-center justify-content-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="me-2" /> Live Demo
                      </Button>*/}
                    </div>
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