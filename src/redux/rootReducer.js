import { combineReducers } from "redux"

import cartSlice from "./cart/slice"
import favoritesSlice from "./favorites/slice"
import userSlice from "./user/slice"

const rootReducer = combineReducers({
  cart: cartSlice,
  favorites: favoritesSlice,
  user: userSlice,
})

export default rootReducer
