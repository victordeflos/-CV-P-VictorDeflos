import React from "react";
import styled from "styled-components";
import { BesicLeyout } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h3>
        Any question <span>FAQ</span>
      </h3>

      <div>
        <h4>How do I Start?</h4>

        <div className="answer">
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule.</h4>
        <div className="answer">
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Ethics Cities.</h4>
        <div className="answer">
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What we offer</h4>
        <div className="answer">
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(BesicLeyout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 3rem;
    font-weight: lighter;
  }
  .faq-line {
    background: turquoise;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
