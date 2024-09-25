import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        now_playing:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.movies=action.payload;
        }
    }
})

export const {addNowPlayingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;