import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import sessionStorage from "redux-persist/lib/storage/session"

import cartSlice from "./cart/slice"
import favoritesSlice from "./favorites/slice"
import userSlice from "./user/slice"

const localStorageConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
}

const sessionStorageConfig = {
  key: "user",
  storage: sessionStorage,
}

const rootReducer = combineReducers({
  user: persistReducer(sessionStorageConfig, userSlice),
  cart: cartSlice,
  favorites: favoritesSlice,
})

const persistedReducers = persistReducer(localStorageConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
