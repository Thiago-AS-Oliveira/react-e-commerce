import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productInCart = state.products.find(
        (item) => item.product._id === action.payload.product._id
      )

      if (productInCart) {
        state.products = state.products.map((item) =>
          item.product._id === action.payload.product._id
            ? {
                product: { ...item.product },
                quantity: item.quantity + action.payload.quantity,
              }
            : item
        )
        return
      }

      state.products = [
        ...state.products,
        { product: action.payload.product, quantity: action.payload.quantity },
      ]
    },
    removeProductToCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.product._id !== action.payload
      )
    },
    increaseProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.product._id === action.payload
          ? { product: { ...item.product }, quantity: item.quantity + 1 }
          : item
      )
    },

    decreaseProduct: (state, action) => {
      state.products = state.products
        .map((item) =>
          item.product._id === action.payload
            ? { product: { ...item.product }, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    },
    clearCart: (state) => {
      state.products = []
    },
  },
})

export const {
  addProductToCart,
  removeProductToCart,
  increaseProduct,
  decreaseProduct,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
