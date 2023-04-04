import React, { useEffect } from 'react'
import BlogCard from '../components/blog/BlogCard'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchstart } from '../features/blogSlice'


const Dashboard = () => {

  const dispatch = useDispatch()

  const getBlogListData = async()=>{


   dispatch(fetchstart)
   const BASE_URL = "http://32312.fullstack.clarusway.com/api/blogs/"
    try {
      const {data} = await axios(`${BASE_URL}`)
      console.log(data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getBlogListData()
  }, [])
  return (
    <BlogCard/>
  )
}

export default Dashboard