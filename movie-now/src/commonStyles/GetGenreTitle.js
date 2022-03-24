import API_Details from "../API_Details";

export const getGenreTitle = (genreId) => {
  let genre = [];

  fetch(API_Details.ALL_GENRES_URL)
    .then((res) => res.json())
    .then((data) =>
      data.genres.map((item) => {
        genre.push(item);
      })
    )
    .catch((err) => console.log(err));

  genre.map((item) => {
    if (item.id === genreId) {
      return item.name;
    }
  });
};
