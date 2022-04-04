import styled from "styled-components";
import { motion } from "framer-motion";

export const OuterCard = styled.div`
  width: 23%;
  margin: 0.8rem 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 40%;
    margin: 0.8rem auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 60%;
  }
`;

export const Card = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  margin: 10px 0;
  background: transparent;

  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;
`;

export const CardImage = styled(motion.img)`
  width: 100%;
  border-radius: 0.3rem;
`;

export const MovieDetails = styled.div`
  display: flex;
  margin: 1rem 0.3rem;
  justify-content: space-between;
`;

export const MovieTitle = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.content1};
  padding-left: 0.8rem;
  margin: 0;
  width: 80%;
`;

export const MovieRatings = styled(motion.div)`
  background: ${({ theme }) => theme.colors.content1};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #fff;
  margin: 0 auto;
  position: absolute;
  top: 3%;
  right: 3%;
`;

export const MovieGenreContainer = styled(motion.div)`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  padding-left: 0.8rem;
`;

export const MovieGenre = styled(motion.div)`
  color: #fff;
  padding: 0.3rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.content1};

  &:hover {
    background: #991531;
  }
`;
