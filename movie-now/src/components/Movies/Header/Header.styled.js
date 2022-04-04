import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundHeaderImage = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 41%,
      rgba(0, 0, 0, 0.35) 100%
    ),
    url(${({ image }) => image});
  background-size: 100%, cover;
  background-position: center;
  height: 800px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export const BlurredOverlay = styled.div`
  width: 100vw;
  height: 800px;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
    padding: 30px 0;
  }
`;

export const MovieCard = styled.div`
  width: 60%;
  border-radius: 0.3rem;
  overflow: hidden;
  display: flex;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

export const MovieCardImage = styled.img`
  border-radius: 0.3rem;
  width: 40%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 60%;
  padding: 0.8rem;
  color: #fff;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ genreList }) =>
    genreList !== undefined ? "space-between" : "center"};
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Tabs = styled.div`
  display: ${({ genreList }) => (genreList !== undefined ? "flex" : "none")};
  gap: 0.5rem;
`;

export const TabsContentMovieDetails = styled.div`
  border-bottom: ${({ currentTab, theme }) =>
    currentTab === "Movie Details"
      ? `2px solid ${theme.colors.content1}`
      : "2px solid transparent"};
  color: #fff;
  padding-bottom: 0.1rem;
  cursor: pointer;
`;

export const TabsContentTrailer = styled.div`
  border-bottom: ${({ currentTab, theme }) =>
    currentTab === "Trailer"
      ? `2px solid ${theme.colors.content1}`
      : "2px solid transparent"};
  color: #fff;
  padding-bottom: 0.1rem;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0.4rem 0;
`;

export const Synopsis = styled.p``;

export const MovieDetails = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  .info-column {
    margin: 0 15px;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  & p {
    font-size: 0.9rem;
  }
`;

export const Ratings = styled(motion.div)`
  .ratings-score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: ${({ theme }) => theme.colors.content1};
    border-radius: 50%;
    color: #fff;
  }
`;
export const Director = styled(motion.div)``;
export const RunTime = styled(motion.div)``;

export const Budget = styled(motion.div)``;

export const MovieGenreContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
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

export const Trailer = styled.iframe`
  margin-top: 0.5rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 300px;
  }
`;
