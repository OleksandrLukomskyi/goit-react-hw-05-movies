import OneMovie from "components/OneMovie/OneMovie";


const ListMovie = ({results}) => {
  
      

  return (
    <>
    {/* {isLoading && <h1> loading...</h1>} */}
    {results && results.map((el)=> <OneMovie key={el.id} movie={el} />)}
    </>
  )
}

export default ListMovie