import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function CollaborateMedia() {
  return (
    <>
      {/* Collaborate Section */}
      <motion.div 
        style={{ backgroundColor: "#ffffff", minHeight: "80vh" }} 
        className="py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text Content */}
            <Col md={6} className="text-center text-md-start p-4">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h6 className="text-danger fw-bold">PARTNER WITH ENTRILY</h6>
                <h2 className="fw-bold mb-3">
                  Collaborate, <br />
                  <span className="fw-bold text-dark">Earn And Grow</span>
                </h2>
                <p className="fs-5 text-muted">
                  A win-win offer from an affordable, feature-rich technology support for your global education businesses.
                  By partnering with Entrily, you will not only receive additional revenue but also be making an investment 
                  in the future of your business.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
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

            {/* Right Side - Image */}
            <Col md={6} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="rounded overflow-hidden"
              >
                <img
                  src="/src/assets/white shirt person 1.png" // Replace with actual image
                  alt="Partner with Entrily"
                  className="img-fluid rounded"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Media Presence Section */}
      <motion.div 
        style={{ backgroundColor: "#ffffff", minHeight: "60vh" }} 
        className="py-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Container>
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h6 className="text-danger fw-bold">MEDIA PRESENCE</h6>
            <h2 className="fw-bold mb-5">Entrily spotted on News Channels</h2>
          </motion.div>

          {/* Logos Grid */}
          <Row className="justify-content-center">
            {[
              "ANI",
              "UP TODAY",
              "WHITE HOUSE NEWSTIME",
              "Google News",
              "JioNews",
              "LATESTLY",
              "Business Standard",
              "dailyhunt",
              "BIG NEWS NETWORK.com"
            ].map((news, index) => (
              <Col md={3} sm={4} xs={6} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                  className="p-3 border rounded shadow-sm"
                >
                  <h5 className="fw-bold">{news}</h5>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <Button
              style={{ backgroundColor: "#ee6c6c", border: "none" }}
              className="mt-4 px-4 py-2 fw-bold d-flex align-items-center gap-2"
            >
              <FaArrowRight /> See More
            </Button>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}

export default CollaborateMedia;
