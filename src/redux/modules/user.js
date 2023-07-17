import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    family_name: "",
    given_name: "",
    email: "",
    picture: "",
  },
  isLoggedIn: false,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutuser: (state) => {
      state.isLoggedIn = false;
    },
    setUser: (state, action) => {
      state.user.family_name = action.payload.family_name;
      state.user.given_name = action.payload.given_name;
      state.user.email = action.payload.email;
      state.user.picture = action.payload.picture;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, logoutuser, setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
