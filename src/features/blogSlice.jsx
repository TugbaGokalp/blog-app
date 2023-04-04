import { createSlice } from '@reduxjs/toolkit'


const blogSlice = createSlice({
  name:"blog" ,
  initialState:{
    blogsList:[],
    loading: false,
    error: false

  },
  reducers: {
    fetchstart: (state) => {
        state.loading = true
        state.error = false
    },
    getSuccess: (state, {payload}) =>{
        state.loading=false
        state.blogsList=payload
    },
    fetchFail:(state) => {
        state.loading = false
        state.error = true
    }

  }
});

export const {fetchstart,getSuccess, fetchFail} = blogSlice.actions

export default blogSlice.reducer