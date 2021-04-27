import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import MovieApp from "../img/home0.png"
import PostApp from "../img/home5.png"
import ContactApp from "../img/home4.png"

const Work = styled.div`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2 {
  padding: 1rem 0rem;
}
`;
const Movie = styled.div`
padding-bottom: 10rem;
.Line {
  height: 0.5rem;
  background: #cccccc;
  margin-bottom;
}
img {
  width: 100vh;
  height: 70vh;
  object-fit: cover;
}
`;


const OurWork = () => {
  return (
  <Work>
    <Movie>
      <h2>The MovieApp</h2>
      <div className="line"></div>
      <Link>
      <img src={MovieApp} alt="movie-app"/></Link>
    </Movie>
    <Movie>
      <h2>The PostApp</h2>
      <div className="line"></div>
      <Link>
      <img src={PostApp} alt="post-app"/></Link>
    </Movie>
    <Movie>
      <h2>The ContactApp</h2>
      <div className="line"></div>
      <Link>
      <img src={ContactApp} alt="contact-app"/></Link>
    </Movie>
  </Work>
  )
};

export default OurWork;