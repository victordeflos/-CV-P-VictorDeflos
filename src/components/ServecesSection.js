import React from "react";
import home3 from "../img/home0.png";
import home2 from "../img/home2.png";
import Q1 from "../img/future1.svg";
import Q2 from "../img/future2.svg";
import Q3 from "../img/future3.svg";
import Q4 from "../img/future4.svg";
import { BesicLeyout, Description, Image } from "../styles";
import styled from "styled-components";

const ServicesHome = () => {
  return (
    <Services>
      <Description>
        <h2>
          Automotive revolution <span> perspective </span> towards 2022
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={Q1} alt="Eko City" />

              <h2>
                Cheap Electric Vehicle <span>Change</span> that Matters.
              </h2>
            </div>
            <p>
              Today’s economies are dramatically cha development in emerging
              markets, technologies, sustainability policies, a
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Q2} alt="Efficient" />
              <h2>Background Study</h2>
            </div>
            <p>
              How To Develop Research Topics and Ideas Thesis? Do These 10
              Things! on youtube
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Q3} alt="Globally" />

              <h2>Creative Piople - This is how the subject is structuret </h2>
            </div>
            <p>
              After the title and abstract, the introduction is the next thing
              your audience will read, so it's v
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Q4} alt="Teamwork" />

              <h2>LIMITING GENUS</h2>
            </div>
            <p>
              Definition of Research Definition of Project What is Research
              Project ? Research Project Examples Research Project Types
              Importance of Research Projects Ethics for Research Project
            </p>
          </Card>
        </Cards>
        <Image>
          <img src={home3} alt="Managment" />
          <p>Definition of Research Definition of Project What is Research</p>
        </Image>
      </Description>

      <Image>
        <img src={home2} alt="EkoBatery" />
        <p>Definition of Research Definition of Project What is Research</p>
      </Image>
    </Services>
  );
};

const Services = styled(BesicLeyout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;
export default ServicesHome;
