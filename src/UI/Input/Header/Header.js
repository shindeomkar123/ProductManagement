import { Avatar, Badge, Chip, Grid } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={9} mb={2}>
        <Chip color="primary" label="Yms" sx={{ height: 40, width: 80 }}></Chip>
      </Grid>
      <Grid container item spacing={2} justifyContent="flex-end" xs={3}>
        <Grid item>
          <Badge badgeContent={4} color="primary">
            <Avatar>
              <NotificationsActiveIcon />
            </Avatar>
          </Badge>
        </Grid>
        <Grid item>
          <Avatar>
            <SearchIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Avatar>
            <PersonOutlineIcon />
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
