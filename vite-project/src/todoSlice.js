import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;