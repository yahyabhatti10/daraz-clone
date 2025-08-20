import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(
      'https://daraz-clone-s79b.onrender.com/categories'
    )
    const data = await response.json()
    return data
  }
)

export default fetchCategories
