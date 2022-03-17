import styled from "styled-components";
import { motion } from "framer-motion";

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const SignUpContent = styled(motion.div)`
  width: 70vw;
  height: 80vh;
  border: 1px solid ${({ theme }) => theme.colors.content1};
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-radius: 0.5rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const LeftContent = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.content1};
  // background: #fff;
  padding: 2rem;
`;

export const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  & > form > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const SignUpText = styled.p`
  font-size: 0.9rem;
`;
