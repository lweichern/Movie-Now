import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Card = styled(motion.div)`
  width: 100%;
  position: relative;
  cursor: pointer;
  margin: 1rem 0;
`;

export const CardImage = styled(motion.img)`
  width: 100%;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;

  &:hover {
    box-shadow: 3px 3px 7px ${({ theme }) => theme.colors.content2};
  }
`;

export const CardTextTitle = styled(motion.h2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: ${({ theme }) => theme.colors.content2};
  text-align: center;
`;
