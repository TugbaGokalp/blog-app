import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const iconIn = {
  color: "black",
  "&:hover": {
    color: "blue",
  },
};
const iconYou = {
  color: "black",
  "&:hover": {
    color: "red",
  },
};

const About = () => {
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
        align="center"
      >
        <Grid item xs={12}>
          <Card
            sx={{
              maxWidth: 345,
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <CardMedia
              height="70"
              component="img"
              alt="images"
              image="https://clarusway.com/wp-content/uploads/2022/12/clarusway-new-logo-white-300x78.png"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "fantasy" }}
              >
                Clarusway
              </Typography>
              <Typography variant="h6" align="center">
                Full Stack Team
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <LinkedInIcon fontSize="large" sx={iconIn} />
              </IconButton>
              <IconButton>
                <TwitterIcon fontSize="large" sx={iconIn} />
              </IconButton>
              <IconButton>
                <YouTubeIcon fontSize="large" sx={iconYou} />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="large" sx={iconYou} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
