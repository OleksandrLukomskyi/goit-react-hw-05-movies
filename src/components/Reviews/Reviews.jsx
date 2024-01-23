import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsOne from './ReviewsOne/ReviewsOne';
import { getReviewsMovies } from 'services/moviesApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsMovieDetails, setReviewsMovieDetails] = useState(null);

  useEffect(() => {
    const reviewsMovie = async () => {
      try {
        const data = await getReviewsMovies(movieId);
        setReviewsMovieDetails(data);
        
      } catch (error) {
        console.error(error);
      }
    };
    movieId && reviewsMovie();
  }, [movieId]);

 

  return (
    reviewsMovieDetails && (
      <ul>
        {reviewsMovieDetails.results.length !== 0 ? (
          reviewsMovieDetails.results.map(el => (
            <ReviewsOne key={el.id} reviews={el} />
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    )
  );
};

export default Reviews;
