import { configureStore } from "@reduxjs/toolkit";
import { catApi } from "./services/Cat";
import breedsReducer from "./actions";

const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
    breeds: breedsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      catApi.middleware
    ),
});

export default store;
