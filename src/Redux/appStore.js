import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./dataSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
