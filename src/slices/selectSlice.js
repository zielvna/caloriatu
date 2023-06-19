import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        date: 0,
        meal: 'Breakfast',
    },
};

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        changeDate: (state, action) => {
            state.value.date = action.payload;
        },
        changeMeal: (state, action) => {
            state.value.meal = action.payload;
        },
    },
});

export const { changeDate, changeMeal } = selectSlice.actions;

export default selectSlice.reducer;
