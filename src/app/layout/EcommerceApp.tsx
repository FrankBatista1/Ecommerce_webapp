import React, { useState, useEffect } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import NavBar from "../../features/navbar/NavBar";
import { Container, CssBaseline } from "@mui/material";

const EcommerceApp = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length,
      },
    ]);
  }
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
};

export default EcommerceApp;
