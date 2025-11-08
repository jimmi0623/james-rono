import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="home-section position-relative overflow-hidden min-vh-100 d-flex align-items-center"
      style={{
        background: "radial-gradient(circle at top left, #030509 0%, #06090f 50%, #020305 100%)",
        color: "#e5e7eb",
      }}
    >
      {/* Animated neon gradient backdrop */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0,255,255,0.15), transparent 70%)",
            "radial-gradient(circle at 100% 100%, rgba(255,0,255,0.12), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(0,191,255,0.15), transparent 70%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />

      {/* Floating sci-fi particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute rounded-circle"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 80 - 40],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            background: `radial-gradient(circle, rgba(0,255,255,0.8), transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Holographic particle swirl (kept) */}
      <motion.div
        className="position-absolute top-50 start-50 translate-middle"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          filter: "blur(2px)",
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      <Container className="position-relative" style={{ zIndex: 3 }}>
        <Row className="justify-content-center text-center py-5">
          <Col md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="display-3 fw-bold mb-4"
                style={{
                  background: "linear-gradient(90deg, #00e5ff, #7b2ff7, #00e5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow:
                    "0 0 20px rgba(0,191,255,0.4), 0 0 40px rgba(123,47,247,0.25)",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  style={{ display: "block", fontSize: "1.6rem" }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0,255,255,0.4)",
                      "0 0 30px rgba(123,47,247,0.6)",
                      "0 0 10px rgba(0,255,255,0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  James Rono
                </motion.span>
                <br />
<motion.span
  style={{
    display: "inline-block",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#00e5ff",
    textShadow: "0 0 6px rgba(0, 229, 255, 0.3)",
  }}
  animate={{ opacity: [1, 0.85, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Full Stack Developer • AI Integrator
</motion.span>
              </h1>

              <p
                className="lead mb-5"
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  color: "#b0b8c1",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Crafting futuristic, intelligent, and scalable digital experiences —
                blending full-stack engineering with AI automation to power the
                next generation of web.
              </p>

              <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    as={Link}
                    to="/projects"
                    size="lg"
                    className="d-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-pill border-0"
                    style={{
                      background:
                        "linear-gradient(90deg, #00e5ff, #7b2ff7, #00e5ff)",
                      boxShadow:
                        "0 0 25px rgba(0,229,255,0.6), 0 0 45px rgba(123,47,247,0.4)",
                      color: "#fff",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(123,47,247,0.6)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(0,229,255,0.6), 0 0 45px rgba(123,47,247,0.4)")
                    }
                  >
                    View My Work <FaArrowRight />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    as={Link}
                    to="/contact"
                    size="lg"
                    variant="outline-light"
                    className="rounded-pill px-4 py-2"
                    style={{
                      border: "1px solid rgba(0,255,255,0.4)",
                      color: "#00e5ff",
                      boxShadow: "0 0 15px rgba(0,255,255,0.3)",
                      transition: "0.3s ease-in-out",
                      backdropFilter: "blur(5px)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(0,255,255,0.6)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(0,255,255,0.3)")
                    }
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;