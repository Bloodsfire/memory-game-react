import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        count: 0,
        isOn: false
    },
    reducers: {
        tick: state => {
            state.count++
        },
        timerOn: state => {
            state.isOn = true
        },
        timerOff: state => {
            state.isOn = false
        }
    }
});

export const { tick, timerOn, timerOff } = timerSlice.actions;

export const startTimer = () => (dispatch, getState) => {
    const isOn = getState().timer.isOn;
    if (isOn) return;

    dispatch(timerOn());

    const timer = setInterval(() => {
        dispatch(tick());
        console.log(getState().timer.count);

        const isEnded = getState().cards.isEnded;
        if (isEnded) {
            clearInterval(timer);
            dispatch(timerOff())
        }
    }, 1000)
};

export const selectCount = state => state.timer.count;
export const selectIsOn = state => state.timer.isOn;

export default timerSlice.reducer;
