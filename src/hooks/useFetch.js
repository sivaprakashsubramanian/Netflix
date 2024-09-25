import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
const useFetch=(props)=>{
    console.log(props,"abi")

 const now_playing = async ()=>{
    console.log(props,"siva");
    const data=await fetch(props,MOVIE_OPTIONS);
    const JsonData=await data.json();
    return JsonData;
  }
  useEffect(()=>{
    now_playing();
  },[])

}
export default useFetch;