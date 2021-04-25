import React from 'react'
import styled from "styled-components";
import logobel from "../../assets/images/logobel.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  
`;

const LogoImg = styled.div`
  width: 22px;
  height: 22px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  color:#fdfe02;   
  font-size: 12px;
  margin: 0;
  margin-left: 4px;
  font-weight: lighter;
  font-family: "Lobster";
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logobel} alt="victor de flos" />
      </LogoImg>
      <LogoText>VICTOR<span> DE</span> FLOS</LogoText>
    </LogoWrapper>
  );
}
