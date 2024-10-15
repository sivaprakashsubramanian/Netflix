import { useEffect } from 'react'
import { ARVINGTODAY_API, MOVIE_OPTIONS, ONTHEAIR_API, POPULARTV_API } from '../utils/constant';
import { addAriving, addOnTheAir, addPopularTV } from '../utils/TVSeriesSlice';
import { useDispatch } from 'react-redux';


const useFetchTvSeries = () => {
    useEffect(()=>{
        getAddArivingTVList();
        getOnAirTVList();
        getPopularTVList();

    },[])
    const dispatch=useDispatch();
    const getPopularTVList=async ()=>{
        const data=await fetch(POPULARTV_API,MOVIE_OPTIONS);
        const JsonData=await data.json();
        dispatch(addPopularTV(JsonData))

    }
    const getOnAirTVList=async ()=>{
        const data=await fetch(ONTHEAIR_API,MOVIE_OPTIONS);
        const JsonData=await data.json();
        dispatch(addOnTheAir(JsonData))

    }
    const getAddArivingTVList=async ()=>{
        const data=await fetch(ARVINGTODAY_API,MOVIE_OPTIONS);
        const JsonData=await data.json();
        dispatch(addAriving(JsonData))

    }
 
}

export default useFetchTvSeries