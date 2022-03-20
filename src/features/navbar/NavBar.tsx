import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
interface Props {
  switchDarkMode: () => void;
  darkMode: boolean;
}

const middleLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];
const NavBar = ({ darkMode, switchDarkMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          Ecommerce website
        </Typography>
        <Switch checked={darkMode} onChange={switchDarkMode} />
        <List sx={{ display: "flex" }}>
          {middleLinks.map(({ title, path }) => (
            <ListItem
            //
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <IconButton size="large" sx={{ color: "inherit" }}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: "flex" }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
