import { Avatar, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../UI/Input/Button/Button";
import Input from "../../UI/Input/Input";
import useHttp from "../Hooks/use-http";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const UserDetails = () => {
  const [user, setUser] = useState();

  return (
    <Grid container>
      <Grid item xs={2}>
        <Avatar alt="Remy Sharp" src="" sx={{ width: 120, height: 120 }} />
      </Grid>

      <Grid item xs={9}>
        <Grid container direction="column" rowSpacing={1}>
          <Grid container item>
            <Grid item xs={2}>
              <p>First Name</p>
            </Grid>
            <Grid item>
              <Input disabled={true} />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={2}>
              <p>Last Name</p>
            </Grid>
            <Grid item>
              <Input disabled={true} />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={2}>
              <p>Email id</p>
            </Grid>
            <Grid item>
              <Input disabled={true} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <ButtonComponent>Back</ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
