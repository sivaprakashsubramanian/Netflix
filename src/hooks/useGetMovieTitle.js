import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieTitle } from '../utils/movieSlice';

const useGetMovieTitle = (props) => {
    const Movies=props;
    // console.log(Movies,"jy")
    const dispatch=useDispatch();
    const getMovies=()=>{
      const filterData=Movies?.map(data=>data.title);
      // console.log(...filterData,"sakthi")
      dispatch(addMovieTitle(filterData));
    
    }
    
    useEffect(()=>{
      getMovies();
    },[])
    
  return (
    <div>useFilter</div>
  )
}

export default useGetMovieTitle