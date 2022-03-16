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

        <div className="custom-shape-divider-bottom-1647435162">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </StyledHeader>
    </>
  );
}
