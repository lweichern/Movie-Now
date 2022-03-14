import React from "react";
import heroImage from "../../../images/Hero Image/hero-image.jpg";

import { StyledHeader, HeroImage } from "./Hero.styled";

export default function Hero() {
  return (
    <StyledHeader>
      <HeroImage src={heroImage} />
    </StyledHeader>
  );
}
