import React, { useEffect } from "react";
import {
  Card,
  CardImage,
  MovieRatings,
  MovieTitle,
  MovieDetails,
} from "../MovieCards/MovieCards.styled";
import API_Details from "../../../API_Details";

export default function MovieCards({ movie }) {
  const imageVariants = {
    rest: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      opacity: 0.3,
      scale: 1.05,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    rest: {
      opacity: 0,
      y: 20,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const ratingsVariants = {
    rest: {
      opacity: 0,
      y: 20,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <Card initial="rest" whileHover="hover" animate="rest">
      <CardImage
        src={`${API_Details.IMAGE_BASE_URL}${API_Details.POSTER_SIZE}${movie.poster_path}`}
        alt={`${movie.title} poster image`}
        variants={imageVariants}
      />
      <MovieDetails>
        <MovieTitle variants={textVariants}>{movie.title}</MovieTitle>
        <MovieRatings variants={ratingsVariants}>
          {movie.vote_average}
        </MovieRatings>
      </MovieDetails>
    </Card>
  );
}
