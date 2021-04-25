import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import GlobalStyle from "../components/GlobalStyle";
import ServicesSection from "../components/ServecesSection";
import FaqSection from "../components/FaqSection";



const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <ServicesSection/>
      <FaqSection/>
      <GlobalStyle />
    </>
  );
};
export default AboutUs;
