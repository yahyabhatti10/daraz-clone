import { useState, useEffect } from 'react'
import { ProductContext } from './ProductContext'
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `${baseUrl}/products`
      )
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
