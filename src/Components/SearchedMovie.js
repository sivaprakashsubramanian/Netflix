import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import MainMovieVideo from './MainMovieVideo';
import useTvtailor from '../hooks/useSearchedTailor';
import useSearchedTailor from '../hooks/useSearchedTailor';

const SearchedMovie = () => {
  const params=useParams();
  const movies=useSelector(store=>store.movies?.now_playing);
  const popular_Movie=useSelector(store=>store.movies?.PopularMovie);
  const upComing_Movie=useSelector(store=>store.movies?.upcomingMovie);
  const popular_TV=useSelector(store=>store.TVList?.Popular);
  const onTheAir_TV=useSelector(store=>store.TVList?.OnTheAir);
  const Ariving_TV=useSelector(store=>store.TVList?.ArivingToday);
  console.log(params.id,"para");
  let url; 
  url="https://api.themoviedb.org/3/tv/series_id/videos?language=en-US"
  // useFetch({url});
  useSearchedTailor()
  // console.log(popular_TV,"ai")
  // console.log(onTheAir_TV,"bi")
  // console.log(Ariving_TV,"ci");
  // const data=popular_Movie.results+upComing_Movie.results+popular_TV.results+onTheAir_TV.results+Ariving_TV.results;
  const filtered =popular_Movie?.results.filter(data=>data.id==params.id)||upComing_Movie?.results.filter(data=>data.id==params.id)||movies?.results.filter(data=>data.id==params.id)
  const tvFilter=popular_TV?.results.filter(data=>data.id==params.id)||onTheAir_TV?.results.filter(data=>data.id==params.id)||Ariving_TV?.results.filter(data=>data.id==params.id)
  console.log(tvFilter,"zzzzzzz")
  // const filter=data.filter(data=>data.id===params.id);
  console.log(filtered,"oi");
  // console.log(movies?.filter(data=>data.id==params.id),"opopop")
  // const {id}=filtered&&filtered[0];
  // let id;
  // filtered?id=filtered[0].id
  filtered?url="https://api.themoviedb.org/3/movie/"+params.id+"/videos?language=en-US": url="https://api.themoviedb.org/3/tv/"+params.id+"/videos?language=en-US";
  useSearchedTailor(url);
  // console.log(id,"lolo")
  return (
    <div>
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+5+"?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
  )
}

export default SearchedMovie