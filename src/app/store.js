import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from '../features/card/cardsSlice';
import timerSlice from "../features/timer/timerSlice";

export default configureStore({
  reducer: {
    cards: fieldReducer,
    timer: timerSlice
  },
});
