import React from 'react'
import { POSTER_URL } from '../utils/constant'

const MovieCards = ({poster,title}) => {
    // console.log(poster,"hello")
  return (
    <div>
        <div className='w-48'>
        <img src={POSTER_URL+poster} alt='img'  />
        </div>
        
    </div>
  )
}

export default MovieCards