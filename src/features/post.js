import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = JSON.parse(localStorage.getItem("postId")) || { postId: "" };

export const postSlice = createSlice({
  name: "post",
  initialState: { value: initialStateValue },
  reducers: {
    clickedPost: (state, action) => {
      state.value = action.payload;
    },
    resetClicked: (state) => {
      localStorage.removeItem("postId");
      state.value = { postId: "" };
    },
  },
});

export const { clickedPost, resetClicked } = postSlice.actions;
export default postSlice.reducer;
