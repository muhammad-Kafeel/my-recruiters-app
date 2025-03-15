import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MergedNavbar from './components/MergedNavbar';
import HeroSection from './components/HeroSection';
import RecruiterPartnership from './components/RecruiterPartnership';
import BusinessPartnership from './components/BusinessPartnership';
import RecruitmentProcess from './components/RecruitmentProcess';
import CollaborateMedia from './components/CollaborateMedia';
import CommissionPartnership from './components/CommissionPartnership';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <MergedNavbar />
    <HeroSection />
    <RecruiterPartnership />
    <BusinessPartnership />
    <RecruitmentProcess />
    <CollaborateMedia />
    <CommissionPartnership />
    <FAQ />
    <Footer />
    </>
  );
}

export default App;
