import React from 'react'
import Header from './Header'
import { NOW_PLAYING_API } from '../utils/constant'
import useFetch from '../hooks/useFetch'
import MainMovieContainer from './MainMovieContainer'
import SecondaryMOvieContainer from './SecondaryMOvieContainer'
import { useSelector } from 'react-redux'
import MovieSearch from './MovieSearch'

const Browser = () => {
 const nowPlaying=useFetch({NOW_PLAYING_API:NOW_PLAYING_API});
//  console.log(nowPlaying,"ki");
 const searchResult=useSelector(store=>store.movieSearch.searching);
  return (
    <div>
    <Header/>
    {searchResult?<MovieSearch/>:<><MainMovieContainer/>
      <SecondaryMOvieContainer /></>}
    
    </div>
    // <div>Hello Everyone</div>
    // <div>Browser</div>
  )
}

export default Browser