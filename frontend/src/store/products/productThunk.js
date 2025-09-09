import { createAsyncThunk } from '@reduxjs/toolkit'
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${baseUrl}/products`)
  const data = await response.json()
  return data
})

export default fetchProducts
