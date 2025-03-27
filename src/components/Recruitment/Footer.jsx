import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-light py-5" style={{ backgroundColor: "#002024" }}>
      <div className="container text-center">
        {/* Expert Advice Box */}
        <motion.div
          className="mb-4 p-4 rounded shadow-lg text-light"
          style={{
            backgroundColor: "#043036",
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "12px",
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Animates once when 50% of the element is in view
        >
          <h3 className="fw-bold">Need expert advice?</h3>
          <p>Feel like you need detailed guidance for further study options</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {[
              { label: "FOR STUDENTS", email: "admissions@entri.ly" },
              { label: "FOR RECRUITERS", email: "associates@entri.ly" },
              { label: "FOR INSTITUTIONS", email: "partners@entri.ly" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h6 className="fw-bold text-white">{item.label}</h6>
                <p className="text-white-50">{item.email}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="btn mt-3"
            style={{
              backgroundColor: "#045D56",
              color: "#FFFFFF",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            💬 Quick Chat
          </motion.button>
        </motion.div>

        {/* Logo and About */}
        <motion.h2
          className="fw-bold"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Entri.ly
        </motion.h2>
        <motion.p
          className="mx-auto w-75 text-white-50"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Entrily is a global admission portal that simplifies the study abroad application process for students, recruiters, and institutions, offering a comprehensive platform to enhance the international education experience.
        </motion.p>

        {/* Office Locations */}
        <div className="row text-start my-4">
          {[
            { title: "LONDON HEAD OFFICE", address: "5, Linhathour Court, London, United Kingdom E14 8RH" },
            { title: "HYDERABAD CORPORATE OFFICE", address: "Manasar Sarovar Apartments, 3rd floor, Navodaya Nagar, Hyderabad-500084, India." },
            { title: "MADURAI BRANCH OFFICE", address: "Sai Baba Complex, 2nd floor, Besant Road, Chinna Chokkikulam, Tamil Nadu-625002." },
            { title: "PAKISTAN BRANCH OFFICE", address: "Rafey’s Height, Flat 306, Adesa Road, Main University Road, Peshawar, Pakistan." },
          ].map((office, index) => (
            <motion.div
              className="col-md-3"
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="p-3 border rounded"
                style={{ backgroundColor: "#043036", borderColor: "#0F5D5C" }}
              >
                <h6 className="text-light">📍 {office.title}</h6>
                <p className="text-white-50">{office.address}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Links Section */}
        <div className="row text-start">
          {[
            { title: "Clients", links: ["Students", "Institutions", "Recruiters"] },
            { title: "Company", links: ["About Us", "Contact Us", "Careers", "Pricing"] },
            { title: "Product", links: ["Course Finder", "Entrily CRM", "Admission Funnel", "Entrily Academy"] },
            { title: "Other", links: ["Refer & Earn", "Press Kit", "Help Desk", "Blog"] },
          ].map((section, index) => (
            <motion.div
              className="col-md-3"
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h6 className="text-light">{section.title}</h6>
              <ul className="list-unstyled text-white-50">
                {section.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <motion.div
          className="mt-4"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="mt-3"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <small className="text-white-50">
            © 2024 Copyright Entri.ly | Glossary | Terms and Conditions | Privacy Policies
          </small>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
