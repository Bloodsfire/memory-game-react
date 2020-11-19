import { createSlice } from '@reduxjs/toolkit';

//TODO: set prop "hidden" for founded pair
//TODO: add shuffle for cards array

let images = [...Array(18)].map((el, id) => `img${id+1}`);
images = [...images, ...images];

const initialState = images.map((el, id) => {
    return {
        id,
        img: '/logo192.png',
        flipped: false,
        pairId: Math.floor(id / 2)
    }
});

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCardFlipped: (state, action) => {
            const { cardId, value } = action.payload;
            const card = state.find(card => card.id === cardId);
            card.flipped = value;
        }
    }
});

export const { setCardFlipped } = cardsSlice.actions;

export const pickCard = cardId => dispatch => {
    dispatch(setCardFlipped({cardId, value: true}));

    setTimeout(() => {
        dispatch(setCardFlipped({cardId, value: false}));
    }, 5000);
};

export const selectCards = state => state.cards;
export const selectCardsIds = state => state.cards.map(card => card.id);
export const selectCardById = (state, cardId) => state.cards.find(card => card.id === cardId);

export default cardsSlice.reducer;
