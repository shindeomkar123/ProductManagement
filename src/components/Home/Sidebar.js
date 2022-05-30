import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { deepOrange } from "@mui/material/colors";

import { Box } from "@mui/system";
import CustomListItem from "./CustomListItem";
import { useContext } from "react";
import AuthContext from "../Context/auth-context";

const Sidebar = () => {
  const ctx = useContext(AuthContext);

  const listItems = [
    {
      name: "Dashboard",
      listIcon: <DashboardIcon />,
      path: "/home/",
    },
    {
      name: "Product",
      listIcon: <SettingsInputComponentOutlinedIcon />,
      subList: [
        { name: "Add new product", path: "/home/newProduct" },
        { name: "List Products", path: "/home/products" },
      ],
    },
    { name: "File Manager", listIcon: <DriveFileMoveOutlinedIcon /> },
    { name: "Trafic Analyzer", listIcon: <PieChartOutlineOutlinedIcon /> },
    {
      name: "Users Management",
      listIcon: <PeopleAltOutlinedIcon />,
      subList: [
        { name: "Add User", path: "/home/userManager/addUser" },
        { name: "List User", path: "/home/userManager/listUser" },
      ],
      path: "/home/userManager",
    },
    { name: "Calender", listIcon: <CalendarMonthOutlinedIcon /> },
    { name: "Message", listIcon: <MessageOutlinedIcon /> },
    { name: "Payment", listIcon: <PaymentOutlinedIcon /> },
  ];

  const logoutHandler = () => {
    ctx.logout();
  };

  return (
    <Card sx={{ height: 845, borderRadius: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            {ctx.user.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={ctx.user}
      ></CardHeader>
      <Divider></Divider>
      <Grid container direction="column" justifyContent="space-between">
        <Grid item>
          <Box sx={{ width: "100%" }}>
            <nav aria-label="main mailbox folders">
              <List>
                {listItems.map((item,index) => (
                  <CustomListItem item={item} key={index}/>
                ))}
              </List>
            </nav>
            <Divider></Divider>
          </Box>
        </Grid>
        <List>
          <ListItem>
            <ListItemButton onClick={logoutHandler}>
              <ListItemIcon>
                <LoginOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        <Grid item></Grid>
      </Grid>
    </Card>
  );
};

export default Sidebar;
