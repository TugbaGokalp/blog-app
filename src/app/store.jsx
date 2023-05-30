import { configureStore } from "@reduxjs/toolkit"
import blogReducer from "../features/blogSlice"

const store=configureStore({
  reducer:{
    blog:blogReducer
  },
  devTools: process.env.NODE_ENV !== "production",
})
export default store