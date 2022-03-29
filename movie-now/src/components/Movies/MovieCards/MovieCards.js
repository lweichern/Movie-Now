import React, { useEffect, useState } from "react";
import {
  Card,
  CardImage,
  MovieRatings,
  MovieTitle,
  MovieDetails,
  MovieGenreContainer,
  MovieGenre,
} from "../MovieCards/MovieCards.styled";
import API_Details from "../../../API_Details";
import { Link } from "react-router-dom";
import NoImage from "../../../images/no_image.jpg";
import { motion } from "framer-motion";

export default function MovieCards({ movie }) {
  const [genreList, setGenreList] = useState([]);
  const [url, setUrl] = useState(window.location.href);

  useEffect(() => {
    fetchAllGenre();
  }, []);

  const fetchAllGenre = () => {
    fetch(API_Details.ALL_GENRES_URL)
      .then((res) => res.json())
      .then((data) => setGenreList(data.genres))
      .catch((err) => console.log(err));
  };

  const getGenreTitle = (genreId) => {
    let genreName = "";

    genreList.map((item) => {
      if (item.id === genreId) {
        genreName = item.name;
      }
    });

    return genreName;
  };

  const handleUrlChange = () => {
    console.log("Hello");
    setUrl(window.location.href);
  };

  // useEffect(() => {
  //   getGenreTitle(28);
  // }, []);

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
        layout
      >
        <CardImage
          src={
            movie.poster_path !== null
              ? `${API_Details.IMAGE_BASE_URL}${API_Details.POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          alt={`${movie.title} poster image`}
          loading="lazy"
        />
        <MovieDetails>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRatings>{movie.vote_average}</MovieRatings>
        </MovieDetails>
      </Card>
    </Link>
  );
}
