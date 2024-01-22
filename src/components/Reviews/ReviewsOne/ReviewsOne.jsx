const ReviewsOne = ({ reviews }) => {
  return (
    reviews && (
      <li>
        <p>Author:{reviews.author}</p>
        <p>{reviews.content}</p>
      </li>
    )
  );
};

export default ReviewsOne;
