import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Django'];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="display-5 fw-bold mb-3">Skills</motion.h2>
            <p className="lead text-muted">A selection of my technical skills</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <Badge key={idx} bg="dark" className="py-2 px-3 rounded-pill me-2 mb-2">{skill}</Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
