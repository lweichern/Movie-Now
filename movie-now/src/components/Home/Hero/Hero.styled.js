import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.div`
  position: relative;
`;

export const HeroImage = styled.img`
  width: 100vw;
  height: 90vh;
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: auto;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  max-width: 100%;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const LeftSection = styled(motion.div)`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;

    h1 {
      text-align: center;
    }
  }
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  border-radius: 0.4rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`;

export const LeftImage = styled(motion.img)`
  width: 50%;
  object-fit: cover;
  transition: 0.5s;
  object-position: center center;
`;

export const RightImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
`;

export const RightImage = styled(motion.img)`
  width: 100%;
  height: 50%;
`;
