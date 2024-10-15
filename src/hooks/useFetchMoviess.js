import { useEffect } from 'react'
import { UPCOMINGMOVIE,POPULARMOVIE_API, MOVIE_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovie, addUpcomingMovie } from '../utils/movieSlice'

const useFetchMovies = () => {
    useEffect(()=>{
        dataFetch();
        popularData();

    },[]);
    const dispatch=useDispatch();
    const dataFetch=async ()=>{
        const data=await fetch(UPCOMINGMOVIE,MOVIE_OPTIONS);
        const JsonData=await data.json();
        dispatch(addUpcomingMovie(JsonData))

    }
    const popularData=async ()=>{
      const data=await fetch(POPULARMOVIE_API,MOVIE_OPTIONS);
      const JsonData=await data.json();
      dispatch(addPopularMovie(JsonData))
    }
  
}

export default useFetchMovies