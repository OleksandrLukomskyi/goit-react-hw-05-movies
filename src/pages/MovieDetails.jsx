import { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import { getDetailsMovies } from "services/moviesApi"


const MovieDetails = () => {
  
  const {movieId} = useParams()
   const [movies , setMovies] = useState(null);
  
   useEffect(() => {
    const searchMovie = async() => {
try {
  const data = await getDetailsMovies(movieId)
  setMovies(data)

} catch (error) {
 console.error(error)
}
  }
   movieId && searchMovie()
  
    
  }, [movieId])

  
  
  
   return (
    <div>
      <h1>{movies.title}</h1>
      </div>
  )
}

export default MovieDetails