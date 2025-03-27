import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div style={{ backgroundColor: "#0f2b38", minHeight: "100vh" }} className="text-white py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6} className="p-4" >
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Start off-screen left
              animate={{ opacity: 1, x: 0 }} // Slide into view
              transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              style={{ backgroundColor: "#213f45", color: "#0f2b38" }}
              className="p-4 rounded shadow-lg"
            >
              <h1 className="display-5 fw-bold mb-3 text-white">
                Let’s conquer the <br /> market as an Entrily
              </h1>
              <p className="fs-5 text-white">
                Entrily is looking for student recruitment partners to join our global network as active partners. A partner has full access to over 
                <span className="fw-bold"> 49,000+ </span> trending courses delivered by more than 
                <span className="fw-bold"> 720+ </span> top-ranked and leading institutions in 
                <span className="fw-bold"> 10+ </span> countries.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Start slightly lower
                animate={{ opacity: 1, y: 0 }} // Slide up effect
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Button
                  style={{ backgroundColor: "#ee6c6c", border: "none" }}
                  className="mt-3 px-4 py-2 fw-bold"
                >
                  Become a recruiter partner
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="d-flex justify-content-center">
            <motion.img
              src="/src/assets/recuiterbanner.png" // Replace with actual image
              alt="Professional Woman"
              className="img-fluid rounded"
              initial={{ opacity: 0, x: 100 }} // Start off-screen right
              animate={{ opacity: 1, x: 0 }} // Slide into view
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
