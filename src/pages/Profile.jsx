import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { image, username, email, first_name, last_name } = currentUser;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 15,
        minHeight: "90vh",
      }}
    >
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <Card
            sx={{ dispaly: "flex", flexDirection: "column", gap: 4 }}
            align="center"
          >
            <CardMedia
              component="img"
              image={image}
              height={150}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" mb={2}>
                {username}
              </Typography>

              <Typography variant="h5" mb={2}>
                {email}
              </Typography>
              <Typography
                variant="h5"
                mb={2}
              >{`${first_name} ${last_name}`}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;