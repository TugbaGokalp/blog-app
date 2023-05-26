import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Detail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
        mt: 6,
        textAlign: "center",
        justify: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",

          justify: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 600, maxHeight: 750 }}>
            <CardMedia
              sx={{
                objectFit: "contain",
                maxWidth: 250,
                mx: "auto",
                justify: "center",
                alignItems: "center",
              }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
              component="img"
            />

            <CardContent>
              <Typography variant="h6">React</Typography>
              <Typography sx={{ color: "#777" }}>
                React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu
                bir javascript kütüphanesidir. Facebook önderliğinde bir
                geliştirici grubu tarafından geliştirilmekte olan React,
                Model-View-Controller prensibine uygun olarak oluşturulmuştur.
              </Typography>
            </CardContent>
            <Box sx={{display:"flex", justify: "space-between", alignItems: "center"}}>
              <CardActions>
                <IconButton>
                  <FavoriteIcon />
                  <span>3</span>
                </IconButton>

                <IconButton>
                  <CommentIcon />
                  <span>3</span>
                </IconButton>

                <IconButton>
                  <VisibilityIcon />
                  <span>3</span>
                </IconButton>
              </CardActions>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1, mx: 33 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>admin</Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                    29.03.2023 17:27:38
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
