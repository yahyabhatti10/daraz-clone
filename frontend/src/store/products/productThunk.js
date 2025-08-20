import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://daraz-clone-s79b.onrender.com/products')
  const data = await response.json()
  return data
})

export default fetchProducts
