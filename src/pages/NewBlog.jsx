import { Card, Grid } from "@mui/material";
import BlogForm from "../components/blog/BlogForm";

const NewBlog = () => {
  return (
    <Grid
      container
      align="center"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            maxWidth: 345,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <BlogForm />
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewBlog;