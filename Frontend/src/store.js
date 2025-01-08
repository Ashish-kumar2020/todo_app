import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./slice/visibilitySlice";

const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
  },
});
export default store;
