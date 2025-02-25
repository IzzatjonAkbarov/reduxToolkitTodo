import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModalVisibility: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModalVisibility(state) {
      state.openModalVisibility = !state.openModalVisibility;
    },
  },
});
export const { setOpenModalVisibility } = modalSlice.actions;

export default modalSlice.reducer;
