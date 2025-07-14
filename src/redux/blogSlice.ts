import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestBlog } from '../services/posts';
import type { DataBlogResponse } from '../types/interfaces';

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async () => {
  return await requestBlog();
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataBlogResponse,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBlog.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || action.error.message || 'Unknown error';
    });
  },
});

export const blogReducer = blogSlice.reducer;
