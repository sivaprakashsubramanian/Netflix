import React from 'react'
import { useSelector } from 'react-redux'
import MainMovieTitle from './MainMovieTitle';
import MainMovieVideo from './MainMovieVideo';
import useFetchMovies from '../hooks/useFetchMoviess';
import useFetchTvSeries from '../hooks/useFetchTvSeries';
const MainMovieContainer = () => {
    const movies=useSelector(store=>store.movies?.now_playing);
    useFetchMovies();
    useFetchTvSeries();
    if(!movies)
        return;
    const {title,overview,id}=movies[0];
    
  return (
    <div>
        <MainMovieTitle title={title} overview={overview}/>
        <MainMovieVideo movieId={id}/>

    </div>
  )
}

export default MainMovieContainer