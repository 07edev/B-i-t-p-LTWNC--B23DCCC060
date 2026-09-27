import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './productsApi'

export type Product = { id: number; name: string; category: string; price: number; color: string; image: string }
type ProductsState = { items: Product[]; status: 'idle' | 'loading' | 'succeeded' | 'failed'; error: string | null }

const initialState: ProductsState = { items: [], status: 'idle', error: null }

export const fetchProducts = createAsyncThunk('products/fetchProducts', getProducts)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = 'loading'; state.error = null })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload })
      .addCase(fetchProducts.rejected, (state) => { state.status = 'failed'; state.error = 'Không thể tải sản phẩm. Vui lòng thử lại.' })
  },
})

export default productsSlice.reducer
