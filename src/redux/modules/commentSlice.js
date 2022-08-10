import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  tocomments: [],
  tocomment: {},
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const __postComment = createAsyncThunk(
  "todos/postComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://localhost:3001/tocomments",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComment = createAsyncThunk(
  "todos/getComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.get(
        `http://localhost:3001/tocomments/?todoID=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __eiditComment = createAsyncThunk(
  "todos/editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/tocomments/${payload.commentID}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delteComment = createAsyncThunk(
  "todos/delteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://localhost:3001/tocomments/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "tocomments",
  initialState,
  reducers: {
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
  extraReducers: {
    [__postComment.pending]: (state) => {},
    [__postComment.fulfilled]: (state, action) => {
      state.tocomments.push(action.payload);
      console.log(current(state), action);
    },
    [__getComment.pending]: (state) => {},
    [__getComment.fulfilled]: (state, action) => {
      state.tocomments = action.payload;
    },
    [__delteComment.pending]: (state) => {},
    [__delteComment.fulfilled]: (state, action) => {
      const target = state.tocomments.findIndex(
        (comments) => comments.id === action.payload
      );
      state.tocomments.splice(target, 1);
    },
    [__eiditComment.pending]: (state) => {},
    [__eiditComment.fulfilled]: (state, action) => {
      const target = state.tocomments.findIndex(
        (comment) => comment.id === action.payload.commentID
      );
      state.tocomments.splice(target, 1, action.payload);
    },
  },
});

export const { globalEditModeToggle } = todosSlice.actions;
export default todosSlice.reducer;
