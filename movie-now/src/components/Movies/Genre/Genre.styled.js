import styled from "styled-components";
import { motion } from "framer-motion";

export const GenreTitle = styled.h1`
  color: ${({ theme }) => theme.colors.content2};
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

export const LoadMoreBtn = styled(motion.button)`
  border-radius: 0.8rem;
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.colors.content1};
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
`;
