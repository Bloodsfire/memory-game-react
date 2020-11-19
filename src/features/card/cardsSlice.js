import { createSlice } from '@reduxjs/toolkit';

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let images = [...Array(18)].map((el, id) => `img${id+1}`);
images = [...images, ...images];

let initialState = images.map((el, id) => {
    return {
        id,
        img: '/logo192.png',
        flipped: false,
        pairId: Math.floor(id / 2),
        solved: false
    }
});

initialState = shuffle(initialState);

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCardFlipped: (state, action) => {
            const { cardId, value } = action.payload;
            const card = state.find(card => card.id === cardId);
            card.flipped = value;
        },
        checkSolved: (state) => {
            const flippedCards = state.filter(card => card.flipped);

            if (flippedCards.length > 1) {
                flippedCards.map(card => {
                    card.solved = flippedCards[0].pairId === flippedCards[1].pairId;
                    card.flipped = false
                })
            }
        }
    }
});

export const { setCardFlipped, checkSolved } = cardsSlice.actions;

export const pickCard = cardId => (dispatch, getState) => {
    const cards = getState().cards;
    const flippedCount = cards.filter(card => card.flipped)?.length;

    if (flippedCount > 1) return;

    dispatch(setCardFlipped({cardId, value: true}));

    setTimeout(() => {
        dispatch(checkSolved());
    }, 1500);

    setTimeout(() => {
        dispatch(setCardFlipped({cardId, value: false}));
    }, 5000);
};

export const selectCards = state => state.cards;
export const selectCardsIds = state => state.cards.map(card => card.id);
export const selectCardById = (state, cardId) => state.cards.find(card => card.id === cardId);

export default cardsSlice.reducer;
