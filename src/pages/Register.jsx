import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import useAuthCall from "../hooks/useAuthCall";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuthCall();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        rowSpacing={{ sm: 3 }}
        sx={{ p: 2 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Avatar
            sx={{
              backgroundColor: "secondary:light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mb: 4, p: 5 }}>
            <Link to="/login"> Do you have an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
