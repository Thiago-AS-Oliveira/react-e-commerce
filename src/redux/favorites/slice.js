import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleProductToFavorites: (state, action) => {
      const productInFavorites = state.products.find(
        (product) => product._id === action.payload._id
      )

      if (!productInFavorites) {
        state.products = [...state.products, action.payload]

        return
      }
      if (productInFavorites) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        )

        return
      }
    },
    addProductToFavorites: (state, action) => {
      const productInFavorites = state.products.find(
        (product) => product._id === action.payload._id
      )

      if (!productInFavorites) {
        state.products = [...state.products, action.payload]

        return
      }
    },

    removeProductToFavorites: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      )
    },
  },
})

export const {
  toggleProductToFavorites,
  addProductToFavorites,
  removeProductToFavorites,
} = favoritesSlice.actions

export default favoritesSlice.reducer
