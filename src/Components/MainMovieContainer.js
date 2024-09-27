import React from 'react'
import { useSelector } from 'react-redux'
import MainMovieTitle from './MainMovieTitle';
import MainMovieVideo from './MainMovieVideo';
const MainMovieContainer = () => {
    const movies=useSelector(store=>store.movies?.now_playing);
    console.log(movies,"jag");
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