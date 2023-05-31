import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],

    details: [],

    categories: [],

    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // getSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.blogsList = payload;
    // },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    getDetailSuccess: (state, { payload: { data } }) => {
      state.loading = false;
      state.details = data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, getDetailSuccess } =
  blogSlice.actions;

export default blogSlice.reducer;