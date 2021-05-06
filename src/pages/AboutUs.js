import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServecesSection";
import FaqSection from "../components/FaqSection";
import { motion } from 'framer-motion';
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;