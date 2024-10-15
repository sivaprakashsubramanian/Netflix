import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useFetchMovies from '../hooks/useFetchMoviess';
import useFetchTvSeries from '../hooks/useFetchTvSeries';

const SecondaryMOvieContainer = () => {
    const movies=useSelector(store=>store.movies.now_playing);
    const trending=useSelector(store=>store.movies.PopularMovie);
  
    // console.log(movies[0]?.title,'keerth')
    // const title=movies[0]?.
    // console.log("qwert")
   
  return (
    <div className='bg-black' >
        <div className="-mt-48 relative z-10">
        <MovieList movies={movies} title={"Now Playing"}/>
        <MovieList movies={trending?.results} title={"Trending"}/>
        <MovieList movies={movies} title={"Top Rated"}/>
        </div>
    </div>
  )
}

export default SecondaryMOvieContainer