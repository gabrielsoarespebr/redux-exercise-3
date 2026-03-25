import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addActivity: (state, action) => ({ todo: [...state.todo, action.payload] }),
  },
});

export const { addActivity } = toDoSlice.actions;
export default toDoSlice.reducer;
