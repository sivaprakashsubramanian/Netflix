import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        now_playing:null,
        now_playing_trailer:null,
        PopularMovie:null,
        upcomingMovie:null,
        movieTitle:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.now_playing=action.payload;
        },
        addNowPlayingTrailer:(state,action)=>{
            state.now_playing_trailer=action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.PopularMovie=action.payload;
        },
        addUpcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload;
        },
        addMovieTitle:(state,action)=>{
            state.movieTitle.unshift(action.payload);
        },
        removeMovies:(state)=>{
            state.movieTitle.length=0;
        }
    }
})

export const {addNowPlayingMovies,addNowPlayingTrailer,addPopularMovie,addUpcomingMovie,addMovieTitle,removeMovies}=moviesSlice.actions;
export default moviesSlice.reducer;