import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from '../../app/api/agent'

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    agent.Catalog.list().then(products => setProducts (products));

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
      <ProductList products={products}></ProductList>
      <Button variant="contained" onClick={addProduct}>
        Add product
      </Button>
    </>
  );
};
export default Catalog;
