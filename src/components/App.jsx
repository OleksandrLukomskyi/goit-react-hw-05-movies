import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
