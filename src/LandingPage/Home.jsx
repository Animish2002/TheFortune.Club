import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./HeroSection";
import StatisticsSection from "./Stats";
import ServicesAndProcess from "./ServicesAndProcess";
import ContactUs from "./Contact";
import ProcessSection from "./ProcessSection";
import TechStackSection from "./TechStackSection ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatisticsSection />
      <ServicesAndProcess />
      <ProcessSection />
      <TechStackSection/>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
