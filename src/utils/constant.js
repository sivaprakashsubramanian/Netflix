export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODEzMjRkYmQyMjM2MWJmYTMxOWY2MTBiOWRiOTMzNSIsIm5iZiI6MTcyNzI0Nzc1NC41NDcwOSwic3ViIjoiNjU5NTFlM2RlYTM3ZTAwNmZhNGJjZGY0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BGsUnc_75RQZwW9TvwO_qJYfbsrPSxXaQWHohGRUTO4",
  },
};
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";
export const LANGUAGE = [
  {
    identity: "en",
  },
  {
    identity: "hindi",
  },
];
export const SERIES_LIST = [
  {
    GENRES: "TV",
  },
  {
    GENRES: "MovieList",
  },
];
export const POPULARMOVIE_API="https://api.themoviedb.org/3/movie/popular?language=en-US";
export const UPCOMINGMOVIE="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const ARVINGTODAY_API="https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";
export const ONTHEAIR_API="https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
export const POPULARTV_API="https://api.themoviedb.org/3/trending/tv/day?language=en-US"
