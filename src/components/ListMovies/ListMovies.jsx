import React from 'react';
import { OneMovie } from 'components/OneMovie/OneMovie';

export const ListMovies = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.results &&
          movies.results.map(result => (
            <OneMovie key={result.id} result={result} />
          ))}
      </ul>
    </>
  );
};
export default ListMovies;
