import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/api";

export const store = configureStore({
  reducer: {
    apiCall: apiReducer,
  },
});
