import Catalog from "../../features/catalog/Catalog";
import NavBar from "../../features/navbar/NavBar";
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

const EcommerceApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const swtichDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: { default: paletteType === "light" ? "#eaeaea" : "#121212" },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar darkMode={darkMode} switchDarkMode={swtichDarkMode} />
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default EcommerceApp;
