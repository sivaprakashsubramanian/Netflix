import React, { useState } from "react";
import MovieCards from "./MovieCards";
import { Link } from "react-router-dom";

const MovieList = ({ movies, title }) => {
  // console.log(movies, "qwtv");
  // const [movie,setMovie]=useState(movies);
  // const movie=movies;
  console.log( movies, "ki");

  return (
    <div className="px-6 py-3">
      <h1 className=" text-white font-semibold text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar pt-2">
        <div className="flex gap-4">
          {movies?.map((data) => (
            <div key={data.id}>
              <Link to={"/searchedMovie/"+data?.id}><MovieCards poster={data.poster_path} /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
