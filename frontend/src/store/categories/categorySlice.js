import { createSlice } from '@reduxjs/toolkit'
import fetchCategories from './categoryThunk'

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default categorySlice.reducer

export const selectAllCategories = (state) => state.categories.categories
export const getCategoriesStatus = (state) => state.categories.status
export const getCategoriesError = (state) => state.categories.error
