import React from 'react'
import Header from './Header'
import { NOW_PLAYING_API } from '../utils/constant'
import useFetch from '../hooks/useFetch'
import MainMovieContainer from './MainMovieContainer'

const Browser = () => {
 const nowPlaying=useFetch({NOW_PLAYING_API:NOW_PLAYING_API});
 console.log(nowPlaying,"ki");
  return (
    <div>
    <Header/>
    <MainMovieContainer/>
    </div>
    // <div>Hello Everyone</div>
    // <div>Browser</div>
  )
}

export default Browser