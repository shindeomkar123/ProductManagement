import { Box, Card, Grid } from "@mui/material";
import Header from "../../UI/Input/Header/Header";

const NotFoundPage = () => {
  return (
    <Box m={8}>
      <Grid container>
        <Header></Header>
        <Grid item xs={12}>
          <Card sx={{ minHeight: 845, borderRadius: 5 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: 800 }}
            >
              <h1>404 Not Found</h1>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFoundPage;
