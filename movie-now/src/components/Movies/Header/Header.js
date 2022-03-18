import React from "react";
import api_details from "../../../API_Details";
import {
  BackgroundHeaderImage,
  BlurredOverlay,
  MovieCard,
  MovieCardImage,
  Title,
  Content,
  Synopsis,
  MovieDetails,
} from "./Header.styled";

export default function Header({ headerMovie }) {
  console.log(headerMovie);

  return (
    <>
      <BackgroundHeaderImage
        image={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${headerMovie.backdrop_path}`}
      >
        <BlurredOverlay>
          <MovieCard>
            <MovieCardImage
              src={`${api_details.IMAGE_BASE_URL}${api_details.POSTER_SIZE}${headerMovie.poster_path}`}
            />
            <Content>
              <Title>{headerMovie.title}</Title>
              <Synopsis>{headerMovie.overview}</Synopsis>
            </Content>
            <MovieDetails></MovieDetails>
          </MovieCard>
        </BlurredOverlay>
      </BackgroundHeaderImage>
    </>
  );
}
