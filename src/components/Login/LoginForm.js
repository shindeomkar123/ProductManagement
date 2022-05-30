import { Alert, Card, CardContent, Chip, Grid, Snackbar } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../UI/Input/Button/Button";
import Input from "../../UI/Input/Input";
import AuthContext from "../Context/auth-context";
import useHttp from "../Hooks/use-http";
import useInput from "../Hooks/use-input";

const LoginForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const ctx = useContext(AuthContext);
  const token = ctx.token;
  let formInvalid = false;

  const {
    enteredValue: email,
    enteredValueIsValid: emailInValid,
    valueChangeHandler: onEmailChangeHandler,
    resetHandler: onCancelHandler,
    blurHandler:onUserBlurHandler
  } = useInput();

  const {
    enteredValue: password,
    enteredValueIsValid: passInValid,
    valueChangeHandler: onPasswordChangeHandler,
    blurHandler:onPassBlurHandler
  } = useInput();

  if (emailInValid || passInValid) {
    formInvalid = true;
  } else {
    formInvalid = false;
  }

  const credentials = { email, password };

  const setTokenHandler = (tokenVal) => {
    ctx.login(tokenVal.token).then((res) => {
      if (res) {
        navigate("/home/");
        ctx.setUserNameHandler(email)
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    sendRequest: login,
    isLoading,
    error,
    data,
  } = useHttp(
    {
      url: "https://reqres.in/api/login",
      method: "POST",
      body: credentials,
      headers: { "Content-Type": "application/json" },
    },
    setTokenHandler
  );

  const onLoginHandler = () => {
    login();
  };

  return (
    <Fragment>
      <Snackbar
        open={!!error}
        autoHideDuration={100}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error">
          Please enter valid username and password.
        </Alert>
      </Snackbar>
      <Card sx={{ minWidth: 800, minHeight: 400, borderRadius: 3 }}>
        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <Chip
                color="primary"
                label="Yms"
                sx={{ height: 50, width: 80 }}
              ></Chip>
            </Grid>

            <Grid item>
              <Input
                label="Username"
                inputChangeHandler={onEmailChangeHandler}
                blurHandler={onUserBlurHandler}
                value={email}
                error={emailInValid}
              />
            </Grid>

            <Grid item>
              <Input
                label="Password"
                type="password"
                value={password}
                error={passInValid}
                blurHandler={onPassBlurHandler}
                inputChangeHandler={onPasswordChangeHandler}
              />
            </Grid>

            <Grid
              item
              container
              direction="row"
              spacing={3}
              justifyContent="center"
            >
              <Grid item>
                <ButtonComponent
                  clickHandler={onLoginHandler}
                  disabled={formInvalid}
                >
                  {" "}
                  Login{" "}
                </ButtonComponent>
              </Grid>
              <Grid item>
                <ButtonComponent clickHandler={onCancelHandler}>
                  {" "}
                  Cancel
                </ButtonComponent>
              </Grid>
            </Grid>

            <Grid item>
              <p>OR</p>
            </Grid>

            <Grid item>
              <ButtonComponent>Login with Facebook</ButtonComponent>
            </Grid>

            <Grid item>
              <ButtonComponent>Login with Google</ButtonComponent>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default LoginForm;
