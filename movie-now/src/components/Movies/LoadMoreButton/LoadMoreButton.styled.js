import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadMoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const LoadMore = styled(motion.button)`
  padding: 1rem 2.8rem;
  background: ${({ theme }) => theme.colors.content1};
  color: #fff;
  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
`;
