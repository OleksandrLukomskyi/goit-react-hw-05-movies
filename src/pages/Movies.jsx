import { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormSearchProducts from 'components/Forms/FormSearchProducts';
import ListMovies from 'components/ListMovies/ListMovies';
import { getSearchMovies } from 'services/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();

  const getMoviesWithSearch = useCallback(async query => {
    try {
      const data = await getSearchMovies(query);

      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('search');
    getMoviesWithSearch(query);
  }, [getMoviesWithSearch, searchParams]);

  return (
    <>
      <FormSearchProducts />

      {movies && <ListMovies movies={movies} />}
    </>
  );
};

export default Movies;
