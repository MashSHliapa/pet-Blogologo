import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCardItem } from '../services/posts';
import type { DataItemCardResponse } from '../types/interfaces';

export const fetchCardItem = createAsyncThunk('cardItem/fetchCardItem', async ({ id }: { id: string }) => {
  return await requestCardItem(id);
});

const cardItemSlice = createSlice({
  name: 'cardItem',
  initialState: {
    loading: false,
    error: null,
    data: {},
  } as DataItemCardResponse,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCardItem.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCardItem.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || action.error.message || 'Unknown error';
    });
  },
});

export const cardItemReducer = cardItemSlice.reducer;
