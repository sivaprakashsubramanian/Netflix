import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice'
import movieReducer from './movieSlice'
import stateSearch from './movieSearchSlice'
import languages from './movieLanguage'
import generSlice from "./generSlice";
import TVSeriesSlice from "./TVSeriesSlice";

const appstore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        movieSearch:stateSearch,
        language:languages,
        geners:generSlice,
        TVList:TVSeriesSlice



    }

})
export default appstore;