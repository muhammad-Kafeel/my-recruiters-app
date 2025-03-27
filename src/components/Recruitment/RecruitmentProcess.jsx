import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRegClipboard, FaChalkboardTeacher, FaFileUpload, FaPassport, FaPlaneArrival, FaMoneyCheckAlt } from "react-icons/fa";

function RecruitmentProcess() {
  // Animation Variants
  const processVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      style={{ backgroundColor: "#0f2b38", color: "#ffffff", minHeight: "60vh" }} 
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
          <h6 className="text-danger fw-bold">END TO END PROCESS</h6>
          <h2 className="fw-bold mb-5">Recruitment process for entrily partners</h2>
        </motion.div>

        {/* Recruitment Steps */}
        <Row className="justify-content-center">
          {[
            { icon: <FaRegClipboard size={50} />, title: "APPLY", text: "Once signup application form and upload corporate documents. Then we schedule a virtual training." },
            { icon: <FaChalkboardTeacher size={50} />, title: "TRAIN", text: "Our business development team will train you and your staff/counselors about the Entrily platform." },
            { icon: <FaFileUpload size={50} />, title: "SUBMIT", text: "Partners submit student applications with the institutions, course selection, and tuition payments to admissions." },
            { icon: <FaPassport size={50} />, title: "VISA", text: "Entrily team assists students in the visa application process should recruitment partners request." },
            { icon: <FaPlaneArrival size={50} />, title: "ARRIVAL", text: "Entrily can assist students upon their arrival in their desired destination and help with other needs." },
            { icon: <FaMoneyCheckAlt size={50} />, title: "COMMISSION PAYOUT", text: "Recruitment partners can collect incentives after the successful enrollment of every student." }
          ].map((step, index) => (
            <Col md={2} sm={6} xs={12} key={index} className="mb-4">
              <motion.div
                variants={processVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="d-flex flex-column align-items-center text-center p-3"
              >
                <div className="text-danger">{step.icon}</div>
                <h5 className="fw-bold mt-3">{step.title}</h5>
                <p className="text-white-50">{step.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
}

export default RecruitmentProcess;
