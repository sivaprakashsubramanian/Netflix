import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addNowPlayingTrailer } from "../utils/movieSlice";
const useFetch=({NOW_PLAYING_API,url})=>{
    // console.log(props,"abi")
    const dispatch=useDispatch();

 const now_playing = async ()=>{
    console.log(NOW_PLAYING_API,"siva");
    const data=await fetch(NOW_PLAYING_API?NOW_PLAYING_API:url,MOVIE_OPTIONS);
    const JsonData=await data.json();
    NOW_PLAYING_API?dispatch(addNowPlayingMovies(JsonData.results)):dispatch(addNowPlayingTrailer(JsonData));
    
  }
  useEffect(()=>{
    now_playing();
  },[])

}
export default useFetch;