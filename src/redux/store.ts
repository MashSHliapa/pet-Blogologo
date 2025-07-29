import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './blogSlice';
import { cardItemReducer } from './cardItemSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    cardItem: cardItemReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
