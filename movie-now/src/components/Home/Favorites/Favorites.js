import React, { useEffect, useState } from "react";
import { StyledHeader } from "./Favorites.styled";
import API_DETAILS from "../../../API_Details";
import MovieCards from "../../Movies/MovieCards/MovieCards";
import Grid from "../../../commonStyles/Grid/Grid";

export default function Favorites() {
  const [movieList, setMovieList] = useState([]);

  const movieIdList = JSON.parse(
    window.localStorage.getItem("user")
  ).favoriteMovies;

  useEffect(() => {
    movieIdList.map((item) => {
      fetchMovie(item);
    });
  }, []);

  const fetchMovie = async (movieId) => {
    try {
      const movie = await API_DETAILS.fetchMovie(movieId);

      setMovieList((prevMovieList) => [...prevMovieList, movie]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movieList);

  return <div>{movieList.length !== 0 && <Grid movieList={movieList} />}</div>;
}
