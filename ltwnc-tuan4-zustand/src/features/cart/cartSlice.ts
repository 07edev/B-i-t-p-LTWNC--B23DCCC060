import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../products/productsSlice'

export type CartItem = Product & { quantity: number }
type CartState = { items: CartItem[] }

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const foundItem = state.items.find((item) => item.id === action.payload.id)
      if (foundItem) foundItem.quantity += 1
      else state.items.push({ ...action.payload, quantity: 1 })
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const foundItem = state.items.find((item) => item.id === action.payload.productId)
      if (!foundItem) return
      if (action.payload.quantity <= 0) state.items = state.items.filter((item) => item.id !== action.payload.productId)
      else foundItem.quantity = action.payload.quantity
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
