import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
  message: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload.user
    },
    loginError: (state, action) => {
      state.isFetching = false
      state.error = true
      state.message = action.payload.message
    },
    logoutUser: (state) => {
      state.currentUser = null
      state.isFetching = false
      state.error = false
      state.message = ""
    },
    cleanError: (state) => {
      state.error = false
      state.message = ""
    },
  },
})

export const { loginStart, loginSuccess, loginError, logoutUser, cleanError } =
  userSlice.actions

export default userSlice.reducer
