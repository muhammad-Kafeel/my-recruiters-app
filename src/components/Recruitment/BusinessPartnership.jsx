import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap, FaFilter, FaBook, FaClipboardList } from "react-icons/fa";

function BusinessPartnership() {
  // Animation Variants for Cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      style={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }} 
      className="py-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Ensures it only plays once when scrolled into view
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6} className="p-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h6 className="text-danger fw-bold">
                MEET AN EXCEPTIONAL PARTNERSHIP EXPERIENCE
              </h6>
              <h2 className="fw-bold mb-3">
                We unlock your business potential <br /> through Entrily partnership
              </h2>
              <p className="fs-5 text-muted">
                Entrily offers a complete solution pack to increase international student admission rate in your study abroad recruitment business. We have got you covered with:
              </p>
            </motion.div>
          </Col>

          {/* Right Side - Cards with Scroll Animation */}
          <Col md={6}>
            <Row className="g-4">
              {[
                { icon: <FaGraduationCap size={40} />, title: "Entrily", boldTitle: "Course Finder", text: "Search eligible courses, eligibility requirement, submit applications, get real-time support, earn extra commissions, and do a lot more." },
                { icon: <FaClipboardList size={40} />, title: "Admission", boldTitle: "CRM", text: "Admission CRM uses the simplest yet most effective way to process multiple applications and get fast updates." },
                { icon: <FaFilter size={40} />, title: "Admission", boldTitle: "Funnel", text: "Best way to recruit, using an admission funnel, lead prospective clients through a special track to the point of purchase." },
                { icon: <FaBook size={40} />, title: "Entrily", boldTitle: "Academy", text: "Entrily Academy brings passion towards studying abroad. Get information about top colleges, courses, scholarships, and more." }
              ].map((item, index) => (
                <Col md={6} key={index}>
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.2 }} // Staggered effect
                    viewport={{ once: true }}
                  >
                    <Card className="text-center shadow-lg border-0 p-3 rounded">
                      <div className="mb-3">{item.icon}</div>
                      <Card.Title className="fw-bold">
                        {item.title} <span className="text-dark">{item.boldTitle}</span>
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {item.text}
                      </Card.Text>
                      <motion.div
                        className="mx-auto mt-2"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-dark text-white d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: "40px", height: "40px" }}>
                          →
                        </div>
                      </motion.div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default BusinessPartnership;
