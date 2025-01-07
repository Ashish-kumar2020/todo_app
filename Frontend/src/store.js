import { configureStore } from "@reduxjs/toolkit";
import visibilitySlice from "./slice/visibilitySlice";

const store = configureStore({
  reducer: {
    visibility: visibilitySlice,
  },
});
export default store;
