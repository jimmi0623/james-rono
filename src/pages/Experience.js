import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const Experience = () => {
const experiences = [
  {
    company: 'JR Technologies',
    position: 'Full Stack Developer',
    period: 'Jan 2020 – Present',
    description: 'Design, develop, and deploy scalable web applications integrating AI-driven tools and automation workflows.',
	achievements: [
	  'Architected and deployed scalable full-stack web applications using modern stack and tools',
	  'Integrated APIs, databases, and third-party services to deliver seamless, data-driven user experiences',
	  'Optimized application performance, security, and code quality through testing and CI/CD automation',
	  'Collaborated with cross-functional teams to design, build, and maintain end-to-end software solutions'
	]

  },
  {
    company: 'Apollo Agriculture',
    position: 'AI Evaluator & Data Annotator',
    period: 'Apr 2025 – Jul 2025',
    description: 'Evaluated AI-generated farmer advisories and improved model accuracy through dataset refinement.',
    achievements: [
      'Improved model precision by 10% through targeted dataset enhancements',
      'Refined prompt templates for agronomic classification and forecasting',
      'Collaborated with ML engineers to ensure high-quality AI outputs'
    ]
  },
  {
    company: 'Office of the Data Protection Commissioner',
    position: 'AI Evaluator',
    period: 'Feb 2024 – May 2024',
    description: 'Supported the rollout of the “Linda Data” chatbot by localizing datasets and evaluating AI responses.',
    achievements: [
      'Localized Swahili training data for improved chatbot performance',
      'Conducted QA testing and feedback loops for AI model responses',
      'Enhanced language coverage and accuracy across multiple user scenarios'
    ]
  },
  {
    company: 'Kuzi Project',
    position: 'AI Data Contributor',
    period: 'Sep 2024 – Nov 2024',
    description: 'Contributed to locust forecasting AI models through geospatial and satellite imagery annotation.',
    achievements: [
      'Boosted model precision by 12% via accurate dataset labeling',
      'Annotated satellite and geospatial data using Label Studio and QGIS',
      'Supported model validation and consistency checks for agricultural forecasting'
    ]
  },
  {
    company: 'Safaricom Plc',
    position: 'Data Analyst',
    period: 'Oct 2014 – 2020',
    description: 'Automated enterprise data reports and improved data governance systems for business intelligence.',
    achievements: [
      'Developed automated reporting dashboards using Python and SQL',
      'Enhanced data consistency and validation across enterprise systems',
      'Collaborated with IT teams to streamline analytics workflows'
    ]
  },
  {
    company: 'Kenya National Bureau of Statistics',
    position: 'Research Assistant',
    period: 'Apr 2011 – Jul 2014',
    description: 'Conducted regional data collection, analysis, and reporting for national development surveys.',
    achievements: [
      'Collected and processed large-scale field data with accuracy and consistency',
      'Supported statistical analysis for socio-economic indicators',
      'Prepared regional data reports used in national policy briefs'
    ]
  }
];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Work Experience</h2>
            <p className="lead text-muted">My professional journey and accomplishments</p>
          </Col>
        </Row>
        
        <div className="position-relative">
          {/* Timeline line */}
          <div className="position-absolute h-100" style={{ left: '15px', width: '2px', backgroundColor: '#dee2e6', top: 0, zIndex: 0 }}></div>
          
          <Row className="g-4">
            {experiences.map((exp, index) => (
              <Col key={index} xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
<Card className="border-0 shadow-sm mb-4 ms-4 position-relative">
  {/* Timeline dot */}
  <div
    className="position-absolute bg-primary rounded-circle p-2 text-white"
    style={{ left: '-20px', top: '25px', zIndex: 1 }}
  >
    <FaBriefcase />
  </div>

  <Card.Body className="p-4">
    <Row className="align-items-start">
      {/* Left section - Title, Company, Description */}
      <Col md={8}>
        <div className="mb-3 text-start">
          <h3 className="fs-4 fw-bold mb-1 text-start">{exp.position}</h3>
          <p className="text-primary mb-0 text-start">{exp.company}</p>
        </div>
        <p className="text-muted mb-3 text-start">{exp.description}</p>
      </Col>

      {/* Right section - Period */}
      <Col md={4} className="d-flex justify-content-md-end align-items-start">
        <div className="d-flex align-items-center text-muted">
          <FaCalendarAlt className="me-2" />
          <span>{exp.period}</span>
        </div>
      </Col>
    </Row>

    {/* Achievements Section */}
    <div className="mt-3">
      <div className="d-flex align-items-center mb-3">
        <FaTrophy className="text-warning me-2" />
        <h4 className="fs-5 fw-bold mb-0">Key Achievements</h4>
      </div>
      <ListGroup variant="flush">
        {exp.achievements.map((achievement, idx) => (
          <ListGroup.Item key={idx} className="border-0 ps-0 py-1">
            <div className="d-flex text-start">
              <div className="me-3">•</div>
              <div>{achievement}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  </Card.Body>
</Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;