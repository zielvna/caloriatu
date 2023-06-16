import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const selectedDate = createSlice({
    name: 'selectedDate',
    initialState,
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { change } = selectedDate.actions;

export default selectedDate.reducer;
