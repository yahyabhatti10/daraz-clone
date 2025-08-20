import { createSlice } from '@reduxjs/toolkit'
import fetchProducts from './productThunk'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default productSlice.reducer

export const selectAllProducts = (state) => state.products.products
export const getProductsStatus = (state) => state.products.status
export const getProductsError = (state) => state.products.error
