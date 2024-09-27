import React from 'react'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux';

function MainMovieVideo({movieId}) {
  const url = 'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US';
  console.log(url,'j');
useFetch({url});
const movies=useSelector(store=>store.movies?.now_playing_trailer);
const trailerKey=movies?.results[1]?.key;
console.log();
    
  return (
    <div>
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerKey+"?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default MainMovieVideo