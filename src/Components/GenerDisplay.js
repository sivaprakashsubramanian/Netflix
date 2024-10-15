import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import useGetMovieTitle from '../hooks/useGetMovieTitle';
import useGetTvTitle from '../hooks/useGetTvTitle';
import { Link } from 'react-router-dom';


const GenerDisplay = () => {
  const gener=useSelector(store=>store.geners?.items);
  const popular_Movie=useSelector(store=>store.movies?.PopularMovie);
  const upComing_Movie=useSelector(store=>store.movies?.upcomingMovie);
  const popular_TV=useSelector(store=>store.TVList?.Popular);
  const onTheAir_TV=useSelector(store=>store.TVList?.OnTheAir);
  const Ariving_TV=useSelector(store=>store.TVList?.ArivingToday);
  useGetMovieTitle(popular_Movie.results);
  useGetMovieTitle(upComing_Movie.results);
  useGetTvTitle(popular_TV.results);
  useGetTvTitle(onTheAir_TV.results);
  useGetTvTitle(Ariving_TV.results);
  const movieTitle=useSelector(store=>store.movies.movieTitle);
  const tvTitle=useSelector(store=>store.TVList.TVListTitle);
  const search=useSelector(store=>store.geners.searchedGener);
  // console.log(search,"lk")
  // console.log(movieTitle,tvTitle,"op")


 
  
  return (
    <div className='bg-black'>
      {
        gener==="MovieList"?<><MovieList movies={popular_Movie?.results} title={"Popular Movie"} /><MovieList movies={upComing_Movie?.results} title={"Up Coming Movie"}/> </>:gener==="TV"?<><MovieList movies={popular_TV?.results} title={"Popular TV show"}/> <MovieList movies={onTheAir_TV?.results} title={"On The Air"}/> <MovieList movies={Ariving_TV?.results} title={"Ariving Today"} /></>:null
      }
    </div>
  )
}

export default GenerDisplay