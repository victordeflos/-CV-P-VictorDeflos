import React from "react"
import home1 from "../img/home1.png"
import { BesicLeyout, Description, Image, Hide } from "../styles";


const AboutSection = () => {
  return (
    <BesicLeyout>
      <Description>
        <div className="title">
          <Hide>
            <h1>I Work 4 World 2 By Yours</h1>
          </Hide>
          <br></br>
          <Hide>
            <h1>
              <span>The</span> World <span>Is</span>Yours
            </h1>
          </Hide>
          <Hide>
            <h2>
              Forever ? <span>Forever Ever.</span>
            </h2>
          </Hide>
        </div>
        <br></br>
        <h4>
          Consult us for any Digital Transformation and ideas that You have, we
          have more than <span>30 years</span> of experience.
        </h4>
        <br></br>
        <br></br>
        <div>
          <button> My thoughts !? </button>
        </div>
      </Description>

      <Image>
        <img src={home1} alt="My Brand" />
      </Image>
    </BesicLeyout>
  );
};

export default AboutSection;
