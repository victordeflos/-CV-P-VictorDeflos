import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  

`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color:#00ffff;
  font-weight: lighter;
  font-family: "Lobster"; 
  font-size: 13px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Linka = styled.a`
  text-decoration: none;
  color: ;
  font-size: inherit;
`;

   
  

const LinkM = styled.div`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color:black;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #07ffd6;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  font-family: "Lobster"; 

  &:hover {
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }


`;


export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <LinkM><Link to="/">About Us</Link></LinkM>
        </LinkItem>
        <LinkItem>
          <Linka><Link to="/work">Our Work</Link></Linka>
        </LinkItem>
        <LinkItem>
          <Linka><Link to="/contact">Contact Us</Link></Linka>
        </LinkItem>
       
      </LinksWrapper>
    </NavLinksContainer>
  );
}
