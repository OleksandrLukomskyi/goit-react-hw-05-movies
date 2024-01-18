import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// https://api.themoviedb.org/3/movie/550?api_key=b9bcc9744ba437e334e4f8ee43005646
