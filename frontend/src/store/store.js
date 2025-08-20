import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice'
import categoryReducer from './categories/categorySlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
})
export default store
