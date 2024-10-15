import { createSlice } from "@reduxjs/toolkit";

const languages=createSlice({
    name:"language",
    initialState:{
        items:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.items=action.payload
        }
    }
})
export const{changeLanguage}=languages.actions;
export default languages.reducer;