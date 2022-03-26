import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundHeaderImage = styled.div`
  background: #d9d9d9;
  height: auto;
  padding: 4rem 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -1px 10px #888 inset;
`;

export const ActorCard = styled.div`
  width: 80%;
  border-radius: 0.3rem;
  overflow: hidden;
  display: flex;
`;

export const ActorImage = styled.img`
  width: 40%;
  object-fit: cover;
`;

export const ActorContent = styled.div`
  width: 60%;
  padding: 0.8rem;
  color: #fff;
  bottom: 0;
  //   background: rgba(0, 0, 0, 0.8)
  background: rgba(250, 30, 78, 0.75);
  //   background: ${({ theme }) => theme.colors.content2};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ActorName = styled.h1`
  margin: 0;
`;

export const ActorBiography = styled.p`
  div {
    font-size: 1.1rem;
  }
`;

export const ActorDetails = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Popularity = styled.div``;
export const PopularityScore = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;
  color: ${({ theme }) => theme.colors.content1};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DateOfBirth = styled.div``;
export const Age = styled.div``;
export const PlaceOfBirth = styled.div``;
