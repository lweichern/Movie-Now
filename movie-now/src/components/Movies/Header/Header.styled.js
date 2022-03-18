import styled from "styled-components";

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
`;

export const BlurredOverlay = styled.div`
  width: 100vw;
  height: 800px;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
`;

export const MovieCard = styled.div`
  width: 50%;
  border-radius: 0.3rem;
  overflow: hidden;
  display: flex;
`;

export const MovieCardImage = styled.img`
  border-radius: 0.3rem;
  width: 50%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 50%;
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
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0.4rem 0;
`;

export const Synopsis = styled.p``;

export const MovieDetails = styled.div``;
export const Ratings = styled.div``;
export const Director = styled.div``;
export const RunTime = styled.div``;
