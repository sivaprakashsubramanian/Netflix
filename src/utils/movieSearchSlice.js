import { createSlice } from "@reduxjs/toolkit";

const search=createSlice({
    name:'movieSearch',
    initialState:{
        searching:false
    },
    reducers:{
        searchState:(state,actions)=>{
            state.searching=!state.searching;
            // console.log(state.searching,"siva")
        }
    }
})
export const{searchState}=search.actions;
export default search.reducer; 