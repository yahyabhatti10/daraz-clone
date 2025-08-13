import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://daraz-clone-s79b.onrender.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}