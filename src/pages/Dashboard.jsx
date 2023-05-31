import React from "react";
import BlogCard from "../components/blog/BlogCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchStart, getSuccess } from "../features/blogSlice";
import axios from "axios";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCalls";

const Dashboard = () => {

  const {getBlogData} = useBlogCall()
  const {blogs} = useSelector((state) => state.blog)
  console.log(blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    getBlogData("blogs")
  })

  const getBlogListData = async()=>{
    dispatch(fetchStart)
    const BASE_URL="http://32312.fullstack.clarusway.com/api/blogs/"
    try {
      const {data}= await axios(`${BASE_URL}`)
      dispatch(getSuccess(data))   
      
      
    } catch (error) {
      console.log(error)
    }
  }

 

  return (
    <>
      <BlogCard   />
    </>
  );
};

export default Dashboard;
