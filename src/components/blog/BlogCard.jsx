import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function BlogCard() {

const butonStyle = {
  color: "white",
  backgroundColor: "green",
  "&:hover":{
    backgroundColor:'white',
    color:'green'
  }
}

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" align="justify">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            29.03.2023 17:27:38
          </Typography>

          <Typography sx={{display:"flex", alignItems:"center", mt:3}}>
            <AccountCircleIcon/>
            Admin
          </Typography>
        </CardContent>



        <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>

         <Typography>

          <IconButton>
            <FavoriteIcon/><span>3</span>
          </IconButton>
          
          <IconButton>
            <ChatBubbleOutlineIcon/><span>3</span>
          </IconButton>
          
          <IconButton>
            <VisibilityIcon/><span>3</span>
          </IconButton>
          
         </Typography>
          

         
          <Button sx={butonStyle} variant="contained" size="small">Read More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
