import axios from "axios"; // axios import 합니다.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "",
      name: "",
      title: "",
      body: "",
    },
  ],
};

export const __postTodos = createAsyncThunk(
  "todos/postTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/todos/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__postTodos.pending]: (state) => {},
    [__postTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      console.log(state, action);
    },
    [__postTodos.rejected]: (state, action) => {
      state.error = action.payload;
      console.log(state, action);
    },
    [__getTodos.pending]: (state) => {},
    [__getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      console.log(state, action);
    },
    [__getTodos.rejected]: (state, action) => {
      state.error = action.payload;
      console.log(state, action);
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      const target = state.todos.id.findIndex(
        (todos) => todos.id === action.payload
      );
      state.todos.data.splice(target, 1);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
