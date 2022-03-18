import React from "react";
import {
  StyledNavHeader,
  StyledNavContent,
  StyledLogo,
  StyledLinks,
  StyledLinkItems,
  StyledSignIn,
} from "./Navbar.styled";
import { Container } from "../../commonStyles/Container.styled";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <StyledNavHeader>
      <Container>
        <StyledNavContent>
          <StyledLogo>MovieNow</StyledLogo>
          <StyledLinks>
            <Link to={"/"}>
              <StyledLinkItems>Home</StyledLinkItems>
            </Link>

            <Link to={"/movies"}>
              <StyledLinkItems>Movies</StyledLinkItems>
            </Link>

            <StyledLinkItems>Actors</StyledLinkItems>
            <StyledLinkItems>Contact Us</StyledLinkItems>
          </StyledLinks>
          <Link to={"/sign-in"}>
            <StyledSignIn>Sign In</StyledSignIn>
          </Link>
        </StyledNavContent>
      </Container>
    </StyledNavHeader>
  );
}
