import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    Dashboard: true,
    VitalTask: false,
    MyTask: false,
    TaskCategories: false,
    Settings: false,
    Help: false,
  },
  reducers: {
    toggleVisibility: (state, action) => {
      const { section } = action.payload;
      // Set all sections to false
      Object.keys(state).forEach((key) => {
        state[key] = false;
      });
      // Set the clicked section to true
      if (state.hasOwnProperty(section)) {
        state[section] = true;
      }
    },
  },
});

export const { toggleVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
