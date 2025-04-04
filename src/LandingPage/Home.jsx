import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./HeroSection";
import StatisticsSection from "./Stats";
import ServicesAndProcess from "./ServicesAndProcess";
import ContactUs from "./Contact";
import ProcessSection from "./ProcessSection";
import TechStackSection from "./TechStackSection ";
import MeetTheTeam from "./MeetTheTeam";
import ProjectsGallery from "./ProjectGallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <StatisticsSection /> */}
      <ServicesAndProcess />
      <ProcessSection />
      <MeetTheTeam />
      <TechStackSection />
      <ProjectsGallery />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
