import React from 'react'
import Header from './Header'
import { NOW_PLAYING_API } from '../utils/constant'
import useFetch from '../hooks/useFetch'

const Browser = () => {
 const nowPlaying=useFetch(NOW_PLAYING_API);
 console.log(nowPlaying,"ki");
  return (
    <Header/>
    // <div>Hello Everyone</div>
    // <div>Browser</div>
  )
}

export default Browser