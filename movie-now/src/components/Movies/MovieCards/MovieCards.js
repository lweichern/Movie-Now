import React, { useEffect } from "react";
import {
  Card,
  CardImage,
  MovieRatings,
  MovieTitle,
  MovieDetails,
} from "../MovieCards/MovieCards.styled";
import API_Details from "../../../API_Details";
import { Link } from "react-router-dom";

export default function MovieCards({ movie }) {
  const cardVariants = {
    rest: {
      scale: 1,
      y: 50,
      opacity: 0,
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <Link
      to={`/movies/movie-details/${movie.id}`}
      style={{ width: "23%", margin: "0.8rem 0" }}
    >
      <Card
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        whileInView="show"
      >
        <CardImage
          src={`${API_Details.IMAGE_BASE_URL}${API_Details.POSTER_SIZE}${movie.poster_path}`}
          alt={`${movie.title} poster image`}
        />
        <MovieDetails>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRatings>{movie.vote_average}</MovieRatings>
        </MovieDetails>
      </Card>
    </Link>
  );
}
