import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomListItem = ({ item }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    if (!item.subList && item.path) {
      navigate(`${item.path}`, { state: { pageName: item.listItem } });
      return;
    }
    setOpen((prevState) => !prevState);
  };

  const navigateHandler = (item) => {
    navigate(`${item.path}`, { state: { pageName: item.listItem } });
  };

  return (
    <Fragment>
      <ListItem>
        <ListItemButton onClick={() => handleClick(item)}>
          <ListItemIcon>{item.listIcon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subList &&
            item.subList.map((item,index) => (
              <ListItemButton
                key={index}
                sx={{ pl: 4 }}
                onClick={() => navigateHandler(item)}
              >
                <ListItemText inset primary={item.name} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </Fragment>
  );
};

export default CustomListItem;
