import Grid from "@mui/material/Grid";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
