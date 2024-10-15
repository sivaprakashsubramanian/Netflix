import { createSlice } from "@reduxjs/toolkit";

const TVSeries=createSlice({
    name:"TVList",
    initialState:{
        ArivingToday:null,
        OnTheAir:null,
        Popular:null,
        TVListTitle:[]
    },
    reducers:{
        addAriving:(state,action)=>{
            state.ArivingToday=action.payload;
        },
        addOnTheAir:(state,action)=>{
            state.OnTheAir=action.payload
        },
        addPopularTV:(state,action)=>{
            state.Popular=action.payload
        },
       
        addTvListTitle:(state,action)=>{
            state.TVListTitle.unshift(action.payload)
        },
        removeTvList:(state)=>{
            state.TVListTitle.length=0;
        }
    }
})
export const{addOnTheAir,addAriving,addPopularTV,addTvListTitle,removeTvList}=TVSeries.actions;
export default TVSeries.reducer;