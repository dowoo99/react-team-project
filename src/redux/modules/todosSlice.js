import axios from "axios"; // axios import 합니다.
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: {},
  isLoading: false,
  error: null,
};

export const __postTodos = createAsyncThunk(
  "todos/postTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/todos", payload);
      console.log(data, payload);
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
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getDetail = createAsyncThunk(
  "todos/getDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/todos/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __editDetail = createAsyncThunk(
  "todos/editDetail",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload.detailTodo
      );
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
      state.todos.push(action.payload);
      console.log(current(state), action);
    },
    [__postTodos.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      console.log(action);
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(target, 1);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editDetail.pending]: (state) => {
      state.isLoading = true;
    },

    [__editDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      // const target = state.todo.findIndex((to) => to.id === action.payload.id);
      // state.todo[target] = action.payload;
      // console.log(target);
      // return state.todo[target];
      state.todo = action.payload;
    },
    [__editDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
