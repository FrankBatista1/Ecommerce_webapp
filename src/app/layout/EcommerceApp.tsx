import React, { useState, useEffect } from 'react'
import { Product } from '../models/product';

const EcommerceApp = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect (() => {
    fetch('http://localhost:5000/api/products')
      . then(response => response.json())
      .then (data => setProducts(data));
      
 }, []);
 function addProduct() {
  setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: prevState.length
    }]);
  }
 return(
   <div>  
     <ul>{products.map((product, index) => (
      <li key={index}>{product.name}</li>))}
    </ul>
    <button onClick={addProduct}>Add product</button>
   </div>
 )
};



export default EcommerceApp;