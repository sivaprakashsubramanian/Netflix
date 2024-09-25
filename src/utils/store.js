import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice'

const appstore=configureStore({
    reducer:{
        user:userReducer

    }

})
export default appstore;