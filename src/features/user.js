import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = JSON.parse(localStorage.getItem("user")) || {
  username: "",
  admin: false,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.value = {
        username: "",
        admin: false,
        token: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
