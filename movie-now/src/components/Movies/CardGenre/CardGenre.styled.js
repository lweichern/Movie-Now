import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  width: 30%;
  position: relative;
  cursor: pointer;
  margin: 1rem 0;
`;

export const CardImage = styled(motion.img)`
  width: 100%;
`;

export const CardTextTitle = styled(motion.h2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: ${({ theme }) => theme.colors.content2};
`;
