import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  width: 23%;
  position: relative;
  cursor: pointer;

  margin: 10px 0;
  background: transparent;
`;

export const CardImage = styled(motion.img)`
  width: 100%;
  border-radius: 0.3rem;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
`;

export const MovieDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const MovieTitle = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.content2};
`;

export const MovieRatings = styled(motion.div)`
  background: ${({ theme }) => theme.colors.content2};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #fff;
  margin: 0 auto;
`;
