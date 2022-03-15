import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.div`
  position: relative;
`;

export const HeroImage = styled.img`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  filter: blur(6px);
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
`;

export const LeftSection = styled(motion.div)`
  width: 40%;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const LeftImage = styled(motion.img)`
  width: 50%;
  object-fit: cover;
  transition: 0.5s;
  object-position: center center;

  &:hover {
    width: 100%;
  }
`;

export const RightImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
`;

export const RightImage = styled(motion.img)`
  width: 100%;
  height: 50%;
`;
