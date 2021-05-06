import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";



export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
const NavbarContainer = styled.div`
  width: 100%;
  height: 40px;
  box-shadow: 0 2px 3px rgba(23, 246, 235, 0.507);
  display: flex;
  align-items: center;
  padding:  1rem 10 rem;
  background-color: black;   #00e1ff
  position: sticky;
  top: 0;
  z-index: 10;
`;

const LeftSection = styled.div`
  display: flex;
  padding: 1rem 10rem;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  padding: 1rem 10rem;
`;



