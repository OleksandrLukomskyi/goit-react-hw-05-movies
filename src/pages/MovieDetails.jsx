import { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';
import { getDetailsMovies } from 'services/moviesApi';
import css from './MovieDetails.module.css';

const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState(null);

  const {state} = useLocation();

  const navigate = useNavigate();
  

  useEffect(() => {
    const detailsMovie = async () => {
      try {
        const data = await getDetailsMovies(movieId);

        setMoviesDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && detailsMovie();
  }, [movieId]);

  const handelBack = () => {
    navigate(state ?? "/");
  };

 

  return (
    moviesDetails && (
      <div className={css.container}>
        <button onClick={handelBack} className={css.backButton}>
         Go back
        </button>
       
        <div className={css.block}>
          <div>
            <img
              src={
                moviesDetails.poster_path
                  ? [basePath + moviesDetails.poster_path]
                  : DEFAULT_IMG
              }
              alt="poster"
              className={css.poster}
            />
          </div>
          <div className={css.movieDetails}>
            <h2>
              {moviesDetails.original_title} (
              {moviesDetails.release_date.split('-')[0]})
            </h2>
            <p>User score:{Math.round(moviesDetails.vote_average * 10)}%</p>
            <h3>Overview:</h3>
            <p>{moviesDetails.overview}</p>
            <h3>Genres</h3>
            {moviesDetails.genres.map(el => (
              <p className={css.genres}>{el.name}</p>
            ))}
          </div>
        </div>

        <div>
          <p>Additional information:</p>
          <ul className={css.additionalInfo}>
            <li>
              <Link to={'cast'} state={state}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'} state={state}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    )
  );
};

export default MovieDetails;
