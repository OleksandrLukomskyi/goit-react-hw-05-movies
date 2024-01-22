import { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';
import { getDetailsMovies } from 'services/moviesApi';

const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState(null);

  const location = useLocation();

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
    navigate(location.state ?? '/movies');
  };

  console.log(moviesDetails);

  return (
    moviesDetails && (
      <div>
        <button onClick={handelBack}>go back</button>

        <img
          src={
            moviesDetails.poster_path
              ? [basePath + moviesDetails.poster_path]
              : DEFAULT_IMG
          }
          alt="poster"
          style={{ width: '20%' }}
        />
        <h2>
          {moviesDetails.original_title} (
          {moviesDetails.release_date.split('-')[0]})
        </h2>
        <p>User score:{Math.round(moviesDetails.vote_average * 10)}%</p>
        <h3>Overview:</h3>
        <p>{moviesDetails.overview}</p>
        <h3>Genres</h3>
        {moviesDetails.genres.map(el => (
          <p style={{ margin: ' 0px', paddingRight: '5px' }}>{el.name}</p>
        ))}
        <br />

        <p>Additional information:</p>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
