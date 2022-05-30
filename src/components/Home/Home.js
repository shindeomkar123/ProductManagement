import { Box, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../../UI/Input/Header/Header";
import Details from "./Details";
import Sidebar from "./Sidebar";

const Home = () => {

  const location = useLocation();

  console.log(location);

  return (
    <Box m={8}>
      <Grid container>
        <Header />
        <Grid item container spacing={4}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Details />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
