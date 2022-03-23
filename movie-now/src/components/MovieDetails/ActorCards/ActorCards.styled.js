import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem;
  overflow: hidden;
  background: #5e5e5e;
  padding: 0.3rem;
  color: #fff;
`;

export const Avatar = styled.img`
  width: 40%;
  border-radius: 0.4rem;
`;

export const ActorDetails = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
`;

export const ActorName = styled.h4``;

export const ActorCharacter = styled.h4``;
