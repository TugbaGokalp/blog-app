import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
// import { fetchStart, getSuccess } from "../features/blogSlice";
import useBlogCall from "../hooks/useBlogCalls";
import { Grid } from "@mui/material";
const Dashboard = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  //   return <BlogCard />;
  // };
  // export default Dashboard;

  return (
    <Grid
      container
      spacing={2}
      align="center"
      sx={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
    >
      {blogs?.map((blog) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Dashboard;