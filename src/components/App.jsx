import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from  'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

// import Layout from './layout/Layout';
// import Layout2 from './layout/Layout2';

import MovieDetails from 'pages/MovieDetails'

import Layout from './layout/Layout';


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     
      <Routes>
      <Route path='/' element={<Layout/>}>
          
        <Route index element ={<Home/>} />
        <Route path='movies' element ={<Movies/>} />
        <Route path='movies/:movieId' element ={<MovieDetails/>} />
        <Route path='movies/:movieId/cast' element ={<Cast/>} />
        <Route path='movies/:movieId/reviews' element ={<Reviews/>} />
      </Route>
      <Route path='*' element ={<h1>404</h1>} />
     </Routes>
    </div>
  );
};
export default App