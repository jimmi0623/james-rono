import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaBrain, FaCodeBranch, FaCloudUploadAlt, FaNetworkWired,
  FaChartLine, FaPalette, FaLock, FaCogs, FaShoppingCart, FaCreditCard
} from 'react-icons/fa';
import AnimatedBackground from "../components/AnimatedBackground"; 

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Web Applications',
      description:
        'I build high-performance web solutions using React, Node.js, and modern frameworks—tailored to your business needs, scalable, and cloud-ready.',
      icon: <FaCodeBranch size={40} />,
      color: '#007BFF'
    },
    {
      id: 2,
      title: 'E-Commerce & Portfolio Websites',
      description:
        'Beautiful, responsive online stores and personal portfolio sites optimized for conversion, performance, and SEO visibility.',
      icon: <FaShoppingCart size={40} />,
      color: '#6C63FF'
    },
    {
      id: 3,
      title: 'Payment API Integration',
      description:
        'Seamless and secure integration with major payment gateways including M-Pesa, Stripe, and Paystack—built with reliability and compliance in mind.',
      icon: <FaCreditCard size={40} />,
      color: '#48CAE4'
    },
    {
      id: 4,
      title: 'SEO & Cloud Optimization',
      description:
        'Boost your visibility and performance through technical SEO, analytics, and optimized hosting on Vercel, AWS, Azure etc with CI/CD pipelines.',
      icon: <FaCloudUploadAlt size={40} />,
      color: '#3A0CA3'
    }
  ]; // ✅ no semicolon after this line!

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <AnimatedBackground />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="mb-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="display-5 fw-bold mb-3"
                style={{
                  letterSpacing: '1px',
                  textShadow: '0 0 10px rgba(76,201,240,0.2)'
                }}
              >
                My Services
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
                Specialized solutions to help your busi
