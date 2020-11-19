import { createSlice } from '@reduxjs/toolkit';

const initialState = [...Array(36)].map((el, id) => {
    return {
        id,
        img: '/logo192.png',
        flipped: false
    }
});

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        toggleFlipped: (state, action) => {
          const card = state.find(card => card.id === action.payload);
          card.flipped = !card.flipped;
        }
    },
});

export const { toggleFlipped } = cardsSlice.actions;

export const selectCards = state => state.cards;
export const selectCardsIds = state => state.cards.map(card => card.id);
export const selectCardById = (state, cardId) => state.cards.find(card => card.id === cardId);

export default cardsSlice.reducer;
