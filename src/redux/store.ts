import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './blogSlice';
import { cardItemReducer } from './cardItemSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    cardItem: cardItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
