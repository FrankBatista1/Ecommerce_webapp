import { AppBar, Toolbar, Typography } from "@mui/material";
import { Switch } from "@mui/material";
interface Props {
  switchDarkMode: () => void,
  darkMode: boolean
}

const NavBar = ({ darkMode, switchDarkMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Ecommerce website</Typography>
        <Switch checked={darkMode} onChange={switchDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
