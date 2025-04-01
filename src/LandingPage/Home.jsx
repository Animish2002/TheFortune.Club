import React from "react";
import { NavbarDemo } from "./NavbarDemo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./HeroSection";
import StatisticsSection from "./Stats";
import ServicesAndProcess from "./ServicesAndProcess";

const Home = () => {
  return (
    <>
      {/* <NavbarDemo /> */}
      <Navbar />
      <Hero />
      <StatisticsSection />
      <ServicesAndProcess />
      <Footer />
    </>
  );
};

export default Home;
