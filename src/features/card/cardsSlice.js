import { createSlice } from '@reduxjs/toolkit';

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let images = [...Array(18)].map((el, id) => id);
// let images = [...Array(3)].map((el, id) => id);
images = [...images, ...images];

let cards = images.map((img, id) => {
    const pairId = Math.floor(id / 2);

    return {
        id,
        img: `/images/${pairId}.png`,
        flipped: false,
        pairId,
        isSolved: false
    }
});

cards = shuffle(cards);

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards,
        isEnded: false
    },
    reducers: {
        setCardFlipped: (state, action) => {
            const { cardId, value } = action.payload;
            const card = state.cards.find(card => card.id === cardId);
            card.flipped = value;
        },
        checkSolved: (state) => {
            const flippedCards = state.cards.filter(card => card.flipped);

            if (flippedCards.length > 1) {
                flippedCards.forEach(card => {
                    card.isSolved = flippedCards[0].pairId === flippedCards[1].pairId;
                    card.flipped = false
                })
            }
        },
        checkEnded: (state) => {
            state.isEnded = state.cards.every(card => card.isSolved);
        },
    }
});

export const { setCardFlipped, checkSolved, checkEnded } = cardsSlice.actions;

export const pickCard = cardId => (dispatch, getState) => {
    const cards = getState().cards;
    const flippedCount = cards.cards.filter(card => card.flipped)?.length;

    if (flippedCount > 1) return;

    dispatch(setCardFlipped({cardId, value: true}));

    setTimeout(() => {
        dispatch(checkSolved());
        dispatch(checkEnded())
    }, 1500);

    setTimeout(() => {
        dispatch(setCardFlipped({cardId, value: false}));
    }, 5000);
};

export const selectCards = state => state.cards.cards;
export const selectCardsIds = state => state.cards.cards.map(card => card.id);
export const selectCardById = (state, cardId) => state.cards.cards.find(card => card.id === cardId);
export const selectIsEnded = state => state.cards.isEnded;

export default cardsSlice.reducer;
