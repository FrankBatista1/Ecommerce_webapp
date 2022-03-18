import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{mb: 4}}>
      <Toolbar>
        <Typography variant="h6">Ecommerce website</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
