import { configureStore } from "@reduxjs/toolkit";
import { catApi } from "./services/Cat";

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});
