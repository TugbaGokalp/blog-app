import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const butonStyle = {
  color: "white",
  backgroundColor: "green",
  "&:hover": {
    backgroundColor: "white",
    color: "green",
  },
};
const BlogCard = () => {
 const navigate =useNavigate()
  
  const { blogsList } = useSelector((state) => state.blog);
  console.log(blogsList);

  const handleNavigate=(id)=>{
    navigate(`/detail/${id}`)    
  }

  return (
    <Grid
      container
      align="center"
      spacing={2}
      sx={{ minHeight: "90vh", display: "flex", alignItems: "center", p: 2 }}
    >
      {blogsList?.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item?.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="justify"
                >
                  {item.content}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={2}>
                  {item.publish_date}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", mt: 2 }}
                >
                 
                  <AccountCircleIcon />
                  <span>{item.author}</span>
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton color="secondary">
                    <FavoriteIcon />
                    <span>{item.likes}</span>
                  </IconButton>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                    <span>{item.comment_count}</span>
                  </IconButton>
                  <IconButton>
                    <VisibilityIcon />
                    <span>{item.post_views}</span>
                  </IconButton>
                </Typography>
                <Button
                  size="small"
                  sx={butonStyle}
                  variant="contained"
                  onClick={() => handleNavigate(item?.id)}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default BlogCard;
