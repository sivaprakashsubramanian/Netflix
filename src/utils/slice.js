import { createSlice } from "@reduxjs/toolkit";

const  userSlice=createSlice({
    name:'user',
    initialState:{
        users:[]
    },
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
            console.log(action.payload,"bi");
        },
        removeUser:(state,action)=>{
            state.users.pop();
        }
    }
})
export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;