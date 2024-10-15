import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTvListTitle } from '../utils/TVSeriesSlice';

const useGetTvTitle = (props) => {
    const Movies=props;
    const dispatch=useDispatch();
    const getTvShows=()=>{
      const filterData=Movies?.map(data=>data.name);
    //   console.log(filterData,"og")
      dispatch(addTvListTitle(filterData));
    
    }
    useEffect(()=>{
        getTvShows();
      },[])
    
  return (
    <div>useGetTvTitle</div>
  )
}

export default useGetTvTitle