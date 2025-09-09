import { createAsyncThunk } from '@reduxjs/toolkit'
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(
      `${baseUrl}/categories`
    )
    const data = await response.json()
    return data
  }
)

export default fetchCategories
