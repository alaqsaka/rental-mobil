import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cars from "../components/parts/Cars";
import ContactUs from "../components/parts/ContactUs";
import FeaturesAsymmetrical from "../components/parts/FeaturesAsymmetrical";
import Hero from "../components/parts/Hero";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesAsymmetrical />
      {/* <Cars /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
