import { createSlice } from '@reduxjs/toolkit';
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage';
import { setCardToLocalStorage } from '../helpers/setCardToLocalStorage';
import type { ICardItem } from '../types/interfaces';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: getCardFromLocalStorage('favorites'),
  },
  reducers: {
    addCardToFavorites: (state, action) => {
      const favoriteCard = action.payload;
      state.data.push(favoriteCard);
      setCardToLocalStorage('favorites', state.data);
    },

    removeCardFromFavorites: (state, action) => {
      const favoriteCard = action.payload;
      const deletedCardIndex = state.data.findIndex((item: ICardItem) => item.id == +favoriteCard.id);
      state.data.splice(deletedCardIndex, 1);
      setCardToLocalStorage('favorites', state.data);
    },
  },
});

export const { addCardToFavorites, removeCardFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
