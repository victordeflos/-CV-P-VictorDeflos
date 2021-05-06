import React from "react";
import { BesicLeyout, Description, Image } from "../styles";
import styled from "styled-components";
import home3 from "../img/home0.png";
import home2 from "../img/home2.png";
// Import Icons
import Q1 from "../img/future1.svg";
import Q2 from "../img/future2.svg";
import Q3 from "../img/future3.svg";
import Q4 from "../img/future4.svg";
// Scroll Animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';


const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      transition={{ duration: 0.75 }}
      ref={element}
      variants={reveal}
      animate={controls}
      initial="hidden"
    >
      <Description>
      <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={Q4} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Q1} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Q2} alt="" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Q3} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
      <img src={home3} alt="" />
          <p>Definition of Research Definition of Project What is Research</p>
        </Image>
     
    </Services>
  );
};

const Services = styled(BesicLeyout)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;