import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogsList: [],
    categories: [],
    detailData:[],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload:{data, url} }) => {
      state.loading = false;
      state[url] = data;
    },
    getSuccessDetail: (state, { payload }) => {
      state.loading = false;
      state.detailData = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail,getSuccessDetail } = blogSlice.actions;

export default blogSlice.reducer;
