import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import modalSlice from "./modalSlice";
export const store = configureStore({
  reducer: {
    todoSlice,
    modalSlice,
  },
});
