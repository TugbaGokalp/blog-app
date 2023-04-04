import { configureStore, createSlice } from '@reduxjs/toolkit'
import blogReducer from "../features/blogSlice"

const store = configureStore({
    reducer:{
        blog:blogReducer
    },
    devTools: process.env.Node_ENV !== "production",
})

export default store