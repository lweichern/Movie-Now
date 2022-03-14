import React from "react";
import {
  StyledNavHeader,
  StyledNavContent,
  StyledLogo,
  StyledLinks,
  StyledLinkItems,
} from "./Navbar.styled";
import { Container } from "../../commonStyles/Container.styled";

export default function Navbar() {
  return (
    <StyledNavHeader>
      <Container>
        <StyledNavContent>
          <StyledLogo>MovieNow</StyledLogo>
          <StyledLinks>
            <StyledLinkItems>Home</StyledLinkItems>
            <StyledLinkItems>Movies</StyledLinkItems>
            <StyledLinkItems>Actors</StyledLinkItems>
            <StyledLinkItems>Contact Us</StyledLinkItems>
          </StyledLinks>
        </StyledNavContent>
      </Container>
    </StyledNavHeader>
  );
}
