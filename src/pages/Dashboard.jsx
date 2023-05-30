import React from "react";
import BlogCard from "../components/blog/BlogCard";
import { useDispatch } from "react-redux";
import { fetchStart, getSuccess } from "../features/blogSlice";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch()

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

  useEffect(() => {
    getBlogListData()
  }, [])

  return (
    <>
      <BlogCard   />
    </>
  );
};

export default Dashboard;
