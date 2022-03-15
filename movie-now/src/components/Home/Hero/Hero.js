import React, { useEffect, useState } from "react";
import heroImage from "../../../images/Hero Image/hero-image.jpg";
import api_details from "../../../API_Details";
import {
  StyledHeader,
  HeroImage,
  HeroContent,
  LeftSection,
  RightSection,
  LeftImage,
  RightImageContainer,
  RightImage,
} from "./Hero.styled";

export default function Hero({ image1, image2, image3 }) {
  return (
    <>
      <StyledHeader>
        <HeroImage src={heroImage} />
        <HeroContent>
          <LeftSection
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1>Hero title</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </LeftSection>
          <RightSection>
            <LeftImage
              src={image1}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.9 }}
            />
            <RightImageContainer>
              <RightImage
                src={image2}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              <RightImage
                src={image3}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </RightImageContainer>
          </RightSection>
        </HeroContent>
      </StyledHeader>
    </>
  );
}
