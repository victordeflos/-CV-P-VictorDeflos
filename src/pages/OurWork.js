import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import MovieApp from "../img/movieapp2.png"
import PostApp from "../img/postapp2.png"
import ContactApp from "../img/contactapp2.png"
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  sliderContainer,
  movieContainer,
  slider,
} from '../animation';




const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
  <Work style={{ background: '#fff' }}
  variants={pageAnimation}
  exit="exit"
  initial="hidden"
  animate="show">
    <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>Movie App</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to='/work/movie-app'>
          <Hide>
            <motion.img variants={photoAnim} src={MovieApp} alt="movie-app" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
    
      <h2>The PostApp</h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to='/work/post-app'>
      <img src={PostApp} alt="post-app"/>
      </Link>
    </Movie>
    <Movie transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
      <h2>The ContactApp</h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to='/work/contact-app'>
      <img src={ContactApp} alt="contact-app"/></Link>
    </Movie>
  </Work>
  )
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;


export default OurWork;