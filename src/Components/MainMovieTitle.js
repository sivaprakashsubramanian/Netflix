import React from 'react'

const MainMovieTitle = ({title,overview}) => {
    console.log("title");
  return (
    <div className='absolute w-screen aspect-video pt-[60%] px-2 md:pt-[20%] md:px-10 lg:12 bg-gradient-to-r from-black  text-white'>
        <h2 className='text-2xl md:text-6xl font-semibold '>{title}</h2>
        <p className='w-full py-2  md:w-1/2 md:py-6'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white px-4 py-1 md:px-8 md:py-2 rounded text-black font-semibold hover:opacity-70'>
                Play
            </button>
            <button className='bg-gray-500 px-8 py-2 rounded  text-white font-semibold'>
                More Info
            </button>
        </div>
        </div>

  )
}

export default MainMovieTitle