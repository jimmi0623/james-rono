import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      institution: 'Moi University, Eldoret-Kenya',
      degree: 'Bachelor of Science in Information Sciences',
      period: '2015 - 2017',
      description: 'Specialized in Information Technology. Graduated with honors.',
      courses: ['Software Engineering', 'Data Structures & Algorithms', 'Artificial Intelligence','Database Management Systems','Systems Analysis & Design','Computer Programming','']
    }

  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-3 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 my-style">Education</h2>
            <p className="lead">My academic background and qualifications</p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {educations.map((edu, index) => (
            <Col key={index} xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
<Card className="border-0 shadow-sm mb-4 position-relative">
  <Card.Body className="p-4">
    <Row className="align-items-start">
      {/* Left Section - Icon, Degree, Institution, Description */}
      <Col md={8}>
        <div className="d-flex align-items-start mb-3 text-start">
          <div className="bg-primary rounded-circle p-2 text-white me-3">
            <FaGraduationCap size={22} />
          </div>
          <div>
            <h3 className="fs-5 fw-bold mb-1 text-start">{edu.degree}</h3>
            <p className="text-primary fs-6 mb-0 text-start">{edu.institution}</p>
          </div>
        </div>

        {edu.description && (
          <p className="text-muted mb-3 text-start">{edu.description}</p>
        )}

        {edu.courses && edu.courses.length > 0 && (
          <div className="mb-2 text-start">
            <p className="fw-bold mb-2">Key Courses:</p>
            {edu.courses.map((course, idx) => (
              <Badge
                key={idx}
                bg="light"
                text="dark"
                className="me-2 mb-2 px-3 py-2 border"
              >
                {course}
              </Badge>
            ))}
          </div>
        )}
      </Col>

      {/* Right Section - Period */}
      <Col md={4} className="d-flex justify-content-md-end align-items-start">
        <div className="d-flex align-items-center text-muted">
          <FaCalendarAlt className="me-2" />
          <span>{/*edu.period*/}</span>
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