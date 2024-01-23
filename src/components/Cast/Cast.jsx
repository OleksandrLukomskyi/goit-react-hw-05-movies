import CastOne from 'components/CastOne/CastOne';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovies } from 'services/moviesApi';

const Cast = () => {
  const { movieId } = useParams();

  const [castMovieDetails, setCastMovieDetails] = useState(null);

  useEffect(() => {
    const castMovie = async () => {
      try {
        const data = await getCreditsMovies(movieId);
        setCastMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && castMovie();
  }, [movieId]);
  
  return (
    <>
      <ul>
        {castMovieDetails &&
          castMovieDetails.cast.map(el => <CastOne key={el.id} cast={el} />)}
      </ul>
    </>
  );
};

export default Cast;
