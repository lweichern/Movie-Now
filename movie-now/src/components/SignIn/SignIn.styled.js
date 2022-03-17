import styled from "styled-components";
import { motion } from "framer-motion";

export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const SignInContent = styled(motion.div)`
  width: 70vw;
  height: 80vh;
  border: 1px solid ${({ theme }) => theme.colors.content2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const LeftContent = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.content2};
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
