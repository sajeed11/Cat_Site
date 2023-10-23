import { configureStore, createSlice } from "@reduxjs/toolkit";
import { catApi } from "./services/Cat";

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState: { value: "" },
  reducers: {
    setSelectedItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedItem } = selectedItemSlice.actions;

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
    selectedItem: selectedItemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});
