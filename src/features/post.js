import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { id: "" };

export const postSlice = createSlice({
  name: "post",
  initialState: { value: initialStateValue },
  reducers: {
    clickedPost: (state, action) => {
      state.value = action.payload;
    },
    resetClicked: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { clickedPost, resetClicked } = postSlice.actions;
export default postSlice.reducer;
