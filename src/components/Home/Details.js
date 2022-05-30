import { Card, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet, useLocation } from "react-router-dom";

const Details = () => {
//   const { state } = useLocation();
//   const pageName = state.pageName;

  return (
    <Card sx={{ minHeight: 845, borderRadius: 5 }}>
      <Box m={2}>
        <h2>PageName</h2>
      </Box>
      <Divider></Divider>
      <Box m={5}>
        <Outlet />
      </Box>
    </Card>
  );
};

export default Details;
