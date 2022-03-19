import Catalog from "../../features/catalog/Catalog";
import NavBar from "../../features/navbar/NavBar";
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";

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
          <Route exact path='/' component={HomePage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog/:id" component={ProductDetails} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default EcommerceApp;
