import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.content1};
`;

export const SwiperSlideContainer = styled(motion.div)``;

export const SwiperImage = styled(motion.img)`
  width: "100%";
  overflow: "visible";
  cursor: pointer;
`;

export const SwiperMovieTitleContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.content1};
`;

export const SwiperMovieTitle = styled(motion.h3)`
  text-align: center;
`;
