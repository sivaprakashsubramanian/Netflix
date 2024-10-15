import { createSlice } from "@reduxjs/toolkit";

const gener=createSlice({
    name:"geners",
    initialState:{
        items:"TV",
        searchedGener:null,
        searchedTailor:null
    },
    reducers:{
        addGener:(state,action)=>{
            state.items=action.payload
        },
        addSearchGener:(state,action)=>{
            state.searchedGener=action.payload
        },
        addSearchedTailor:(state,action)=>{
            state.searchedTailor=action.payload
        }
    }
})

export const {addGener,addSearchGener,addSearchedTailor}=gener.actions;
export default gener.reducer;
