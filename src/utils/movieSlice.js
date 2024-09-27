import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        now_playing:null,
        now_playing_trailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.now_playing=action.payload;
        },
        addNowPlayingTrailer:(state,action)=>{
            state.now_playing_trailer=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addNowPlayingTrailer}=moviesSlice.actions;
export default moviesSlice.reducer;