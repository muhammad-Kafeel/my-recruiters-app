import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { 
  FaClock, FaFilter, FaGraduationCap, FaHeadset, 
  FaSignInAlt, FaWhatsapp, FaGift 
} from "react-icons/fa";
import { BrowserRouter as Router , Link  } from "react-router-dom";
import "./MergedNavbar.css"; // Import the CSS file

function MergedNavbar() {
  return (
    <div className="merged-navbar">
      {/* Top Navbar */}
      <Navbar expand="lg" className="px-4 py-2 mx-5 top-navbar d-flex justify-content-center align-items-center">
        <div className="container-fluid d-flex justify-content-between align-items-center text-white ">
          {/* Left Section */}
          <div className="d-flex align-items-center">
            <span className="me-3 fs-5 Right_Section Right_Section">Discover Recruiter Products</span>
            <span className="text-white-50 fs-4">|</span>
          </div>

          {/* Middle Section */}
          <Nav className="d-flex align-items-center mx-3">
            <Nav.Link href="#course-finder" className="text-white fs-5 d-flex align-items-center mx-2 Right_Section">
              <FaGraduationCap className="me-1 fs-5" style={{ fontSize: "20px" }} /> Course Finder
            </Nav.Link>
            <Nav.Link href="#crm" className="text-white fs-5 d-flex align-items-center mx-2 Right_Section">
              <FaClock className="me-1 fs-5" style={{ fontSize: "20px" }} /> Entrily CRM
            </Nav.Link>
            <Nav.Link href="#admission-funnel" className="text-white fs-5 d-flex align-items-center mx-2 Right_Section">
              <FaFilter className="me-1 fs-5" style={{ fontSize: "20px" }} /> Admission Funnel
            </Nav.Link>
            <Nav.Link href="#academy" className="text-white fs-5 d-flex align-items-center mx-2 Right_Section">
              <FaGraduationCap className="me-1 fs-5" style={{ fontSize: "20px" }} /> Entrily Academy
            </Nav.Link>
          </Nav>

          {/* Right Section */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#help-desk" className="text-white fs-5 d-flex align-items-center mx-2 hover_effect">
              <FaHeadset className="me-1 " style={{ fontSize: "20px" }} /> Help Desk
            </Nav.Link>
            <Nav.Link href="#sign-in" className="text-white fs-5 d-flex align-items-center mx-2 hover_effect">
              <FaSignInAlt className="me-1 " style={{ fontSize: "20px" }} /> Sign In
            </Nav.Link>
            <Nav.Link href="#whatsapp" className="text-white fs-5 d-flex align-items-center mx-2 hover_effect">
              <FaWhatsapp className="me-1  text-success" style={{ fontSize: "20px" }} /> Chat with us
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="border-bottom"></div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="px-5 py-3 mx-5 main-navbar">
        <div className="container-fluid">
          {/* Logo */}
          <Navbar.Brand href="#home" className="fw-bold text-white fs-4 d-flex align-items-center hover-effect">
            <span className="logo-icon" style={{ fontSize: "34px", marginRight: "8px" }}>🌀</span> Entrily
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Left-side navigation */}
            <Nav className="me-auto">
              <Nav.Link href="#students" className="text-white mx-2 fs-4 hover-effect">Students</Nav.Link>
               <Nav.Link href="#recruiters" className="text-white mx-2 fs-4 hover-effect">Recruiters</Nav.Link>
              <Nav.Link href="#institutions" className="text-white mx-2 fs-4 hover-effect">Institutions</Nav.Link>
              <Nav.Link href="#pricing" className="text-white mx-2 fs-4 hover-effect">Pricing</Nav.Link>

              {/* Dropdowns */}
              <NavDropdown title={<span className="hover-effect text-white">Test Preparation</span>} id="test-prep-dropdown" className="mx-2 fs-4">
                <NavDropdown.Item href="#ielts">IELTS</NavDropdown.Item>
                <NavDropdown.Item href="#toefl">TOEFL</NavDropdown.Item>
                <NavDropdown.Item href="#gre">GRE</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={<span className="hover-effect text-white">Company</span>} id="company-dropdown" className="mx-2 fs-4">
                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Right-side buttons */}
            <Nav className="d-flex align-items-center">
              <FaGift className="me-2 hover-effect gift-animation" style={{ fontSize: "60px", color: "white", padding:"10px" }} />
              <Button className="d-flex align-items-center px-3 signup-btn button-animation">
  Sign up free
</Button>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default MergedNavbar;
