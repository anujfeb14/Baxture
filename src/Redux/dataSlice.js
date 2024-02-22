import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser } = dataSlice.actions;
export default dataSlice.reducer;
