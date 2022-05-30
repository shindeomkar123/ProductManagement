import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import ButtonComponent from "../../UI/Input/Button/Button";
import Input from "../../UI/Input/Input";
import useHttp from "../Hooks/use-http";
import useInput from "../Hooks/use-input";

const AddUser = () => {
  let formInvalid;
  const [newUser, setNewUser] = useState(null);

  const {
    enteredValue: username,
    enteredValueIsValid: usernameInValid,
    valueChangeHandler: usernameChangeHandler,
    blurHandler:onUserBlurHander
  } = useInput();

  const {
    enteredValue: password,
    enteredValueIsValid: passInValid,
    valueChangeHandler: onPasswordChangeHandler,
    blurHandler:onPassBlurHandler
  } = useInput();

  const payload = { email: username, password };

  if (usernameInValid || passInValid) {
    formInvalid = true;
  } else {
    formInvalid = false;
  }

  const onSaveSuccessfull = (data) => {
    if (data.id) {
      setNewUser(data);
    }
  };

  const {
    sendRequest: saveUser,
    isLoading,
    error,
  } = useHttp(
    {
      url: "https://reqres.in/api/register",
      method: "POST",
      body: payload,
      headers: { "Content-Type": "application/json" },
    },
    onSaveSuccessfull
  );

  const onSave = () => {
    if(!username || !password){return;}
    saveUser();
  };

  return (
    <Fragment>
      {error && <Typography color='red'>Username and password required.</Typography>}
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading &&
        !newUser &&(
          <Grid container direction="column" spacing={2} rowSpacing={2}>
            <Grid item>
              <Input
                label="Username"
                inputChangeHandler={usernameChangeHandler}
                blurHandler={onUserBlurHander}
                error={usernameInValid}
              ></Input>
            </Grid>
            <Grid item>
              <Input
                label="Password"
                inputChangeHandler={onPasswordChangeHandler}
                blurHandler={onPassBlurHandler}
                error={passInValid}
              ></Input>
            </Grid>
            <Grid item container direction="row" spacing={3}>
              <Grid item>
                <ButtonComponent clickHandler={onSave} disabled={formInvalid}>
                  Add User
                </ButtonComponent>
              </Grid>
              <Grid item>
                <ButtonComponent>Cancel</ButtonComponent>
              </Grid>
            </Grid>
          </Grid>
        )}

      {!isLoading && newUser && (
        <p>User added successfully with id:{newUser.id}</p>
      )}
    </Fragment>
  );
};

export default AddUser;
