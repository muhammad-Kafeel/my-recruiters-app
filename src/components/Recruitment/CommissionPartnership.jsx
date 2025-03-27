import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function CommissionPartnership() {
  return (
    <motion.div 
      style={{ backgroundColor: "#0f2b38", color: "#ffffff", position: "relative" }} 
      className="py-5 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Wavy Background */}
      <svg
        viewBox="0 0 1440 320"
        style={{ position: "absolute", top: "-40px", left: "0", width: "100%", zIndex: "-1" }}
      >
        <path
          fill="#0f2b38"
          d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,122.7C840,128,960,192,1080,202.7C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <Container>
        {/* Main Heading */}
        <motion.h2
          className="fw-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Join one of the
        </motion.h2>

        {/* Highlighted Text */}
        <motion.h1
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          highest-paying commission partnership
        </motion.h1>

        {/* Earnings Amount */}
        <motion.h1
          className="display-3 fw-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          $2,00,000
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="fs-5 text-white-50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Make big money with us and change your business for better growth.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <Button
            style={{ backgroundColor: "#ee6c6c", border: "none" }}
            className="mt-3 px-4 py-2 fw-bold"
          >
            Become an recruiter partner
          </Button>
        </motion.div>

        {/* Floating Text & Arrow Animation */}
        <motion.div
          className="position-absolute"
          style={{ right: "10%", top: "40%", fontSize: "18px" }}
          initial={{ opacity: 0, x: 50, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          animate={{ y: [0, -5, 0], transition: { duration: 1.5, repeat: Infinity } }}
        >
          <p className="text-white-50 fst-italic">
            Our top Partner <br /> earned over →
          </p>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default CommissionPartnership;
