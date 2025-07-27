import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice"

const appStore = configureStore({
    reducer:{
        playlist : playlistReducer
    }
})

export default appStore;