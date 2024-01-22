import api from './api';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWJjYzk3NDRiYTQzN2UzMzRlNGY4ZWU0MzAwNTY0NiIsInN1YiI6IjY1YTA2NDA5MWZhMWM4MDEyMjZjZGUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH34rbPW40PPr32_DlywakU7hh55fJZgA_lqHibxe9E',
  },
};

export const getTrendingMovies = async () => {
  const { data } = await api(`/trending/movie/day?language=en-US`, options);

  return data;
};

export const getSearchMovies = async query => {
  const { data } = await api(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data;
};

export const getDetailsMovies = async movieId => {
  const { data } = await api(`/movie/${movieId}?language=en-US`, options);
  return data;
};

export const getCreditsMovies = async movieId => {
  const { data } = await api(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const getReviewsMovies = async movieId => {
  const { data } = await api(
    `/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return data;
};
