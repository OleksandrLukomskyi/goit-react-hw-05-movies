import ListMovies from "components/ListMovies/ListMovies";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/moviesApi";


const Home = () => {
  const [movies , setMovies] = useState(null);
  
  useEffect(() => {
    const getTopMovies = async() => {
      try {
        const data = await getTrendingMovies()
        console.log(data);
        setMovies(data);
      
      } catch (error) {
        console.error(error)
      }
          }
         (!movies) && getTopMovies()
  }, [movies])
console.log(movies);
  return (
    <>
    <h1>Trending today</h1>
   {movies && < ListMovies movies={movies}/>} 
      </>
  )
}

export default Home