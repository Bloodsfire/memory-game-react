import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from '../features/card/cardsSlice';

export default configureStore({
  reducer: {
    cards: fieldReducer
  },
});
