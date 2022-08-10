import { configureStore, createSlice } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";
import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    todos,
    comment,
  },
});

export default store;
