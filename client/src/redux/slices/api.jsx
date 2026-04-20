import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: null,
  success: false,
};

export const apiCall = createAsyncThunk(
  "api/call",
  async ({ url, method = "GET", data }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://127.0.0.1:3000/api${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: data ? JSON.stringify(data) : null,
      });

      const result = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(result);
      }

      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.data = null;
      state.success = false;
    },

    saveToken: (state, action) => {
      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      localStorage.removeItem("token");
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiCall.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(apiCall.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })

      .addCase(apiCall.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, saveToken, logout } = apiSlice.actions;
export default apiSlice.reducer;
