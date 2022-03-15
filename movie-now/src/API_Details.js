const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c6c901feb8c155385f1c0332330cb239";

const SEARCH_MOVIE_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_MOVIES_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w780";

const fetchMovie = async (movieId) => {
  const endpoint = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
  return await (await fetch(endpoint)).json();
};

const fetchMovieCredits = async (movieId) => {
  const endpoint = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  return await (await fetch(endpoint)).json();
};

export default {
  BASE_URL,
  API_KEY,
  SEARCH_MOVIE_URL,
  POPULAR_MOVIES_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  fetchMovie,
  fetchMovieCredits,
};
