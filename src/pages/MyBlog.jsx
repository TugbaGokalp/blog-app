import { Grid } from "@mui/material";

import { useSelector } from "react-redux";

import BlogCard from "../components/blog/BlogCard";

const MyBlog = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const { blogs } = useSelector((state) => state.blog);

  const filteredMyBlogs = blogs.filter(
    (blog) => blog.author === currentUser.username
  );

  return (
    <Grid
      container
      align="center"
      sx={{
        p: 4,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {filteredMyBlogs?.map((blog) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyBlog;