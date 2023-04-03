import React from 'react'
import BlogCard from '../components/blog/BlogCard'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container spacing={2} sx={{minHeight:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <BlogCard/>
    </Grid>
  )
}

export default Dashboard