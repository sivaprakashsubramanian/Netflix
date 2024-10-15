import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { MOVIE_OPTIONS } from '../utils/constant';
import { addSearchedTailor } from '../utils/generSlice';

const useSearchedTailor = ({url}) => {
    const dispatch=useDispatch();
    console.log(url,"jj")
    useEffect(()=>{
        getTailor();
    },[]);
    
    const getTailor=async()=>{
        const data=await fetch(url,MOVIE_OPTIONS);
    const JsonData=await data.json();
    dispatch(addSearchedTailor(JsonData.results))
    }
 
}

export default useSearchedTailor