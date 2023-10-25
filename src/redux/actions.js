import { createSlice } from "@reduxjs/toolkit";

const breedsSlice = createSlice({
  name: "breeds",
  initialState: {
    selectedItem: null,
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = breedsSlice.actions;

export default breedsSlice.reducer;
