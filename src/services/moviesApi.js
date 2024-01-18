import { api } from './api';

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
  console.log(data);
  return data;
};

export const getSearchMovies = async () => {
  const { data } = await api(
    `/search/movie?include_adult=false&language=en-US&page=1`,
    options
  );
  console.log(data);
  return data;
};

export const getDetailsMovies = async id => {
  const { data } = await api(`/movie/${id}?language=en-US`, options);
  console.log(data);
  return data;
};

export const getCreditsMovies = async () => {
  const { data } = await api(`/movie/movie_id/credits?language=en-US`, options);
  console.log(data);
  return data;
};

export const getReviewsMovies = async () => {
  const { data } = await api(
    `/movie/movie_id/reviews?language=en-US&page=1`,
    options
  );
  console.log(data);
  return data;
};
