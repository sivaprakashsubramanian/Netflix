import React, { useRef } from 'react'
import { lang } from '../utils/languageObject'
import { useSelector } from 'react-redux'
import { SERIES_LIST } from '../utils/constant'
import { useDispatch} from 'react-redux'
import { addGener, addSearchGener } from '../utils/generSlice'

const MovieSearchBar = () => {
  const identifier=useSelector(store=>store.language?.items)
  const dispatch=useDispatch();
  const gen=useSelector(store=>store.geners?.items);
  const data=useSelector(store=>store.movies.movieTitle)
  const movie=useRef();
 
  const handleChangeGenre=(e)=>{
  
    dispatch(addGener(e.target.value));

  }
  const handleSearch=()=>{
    // console.log(data,"xere");
    dispatch(addSearchGener(movie.current.value));
  }
  return (
    <div className='bg-black p-6 '>
        <div className='grid grid-cols-12 w-[50%] mx-auto gap-1'>
          <select className='col-span-2 m-1 rounded' onChange={handleChangeGenre}>
            {
              SERIES_LIST.map((data,index)=><option key={index} value={data.GENRES} >{data.GENRES}</option>)
            }

          </select>
            <input type='text' placeholder={lang[identifier].descriptive.placeHolder} className='col-span-8 m-1 focus:outline-none rounded ' ref={movie}/>
            <button className='p-2 bg-red-500 col-span-2 m-1 rounded' onClick={handleSearch}>{lang[identifier]?.descriptive.search}</button>
           
        </div>
    </div>
  )
}

export default MovieSearchBar