import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function RecruiterPartnership() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "90vh" }} className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image with Animation */}
          <Col md={6} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }} // Adds slight hover zoom effect
              className="shadow-lg rounded overflow-hidden"
            >
              <img
                src="/src/assets/image.png" // Replace with actual image path
                alt="Recruiter Partnership"
                className="img-fluid rounded"
              />
            </motion.div>
          </Col>

          {/* Right Side - Text Content with Animation */}
          <Col md={6} className="p-4">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h6
                className="text-danger fw-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                RECRUITER PARTNERSHIP
              </motion.h6>

              <motion.h2
                className="fw-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Benefits of becoming an exceptional recruitment partnership
              </motion.h2>

              <motion.ul
                className="fs-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <li>No upfront cost. No hidden fees.</li>
                <li>Commission payouts for every student enrolled.</li>
                <li>Manage leads, search courses, submit applications.</li>
                <li>Dedicated support team for high conversion rates.</li>
                <li>Free training, visa support, scholarships, and more.</li>
                <li>Global reach with top-performing recruiters.</li>
                <li>More opportunities for student applications.</li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
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
        </Row>
      </Container>
    </div>
  );
}

export default RecruiterPartnership;
