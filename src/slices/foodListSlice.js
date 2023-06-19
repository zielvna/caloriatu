import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const foodListSlice = createSlice({
    name: 'foodList',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        update: (state, action) => {
            state.value = state.value.map((food) => {
                if (food.id === action.payload.id) {
                    return action.payload;
                } else {
                    return food;
                }
            });
        },
        remove: (state, action) => {
            state.value = state.value.filter((food) => food.id !== action.payload.id);
        },
    },
});

export const { add, update, remove } = foodListSlice.actions;

export default foodListSlice.reducer;
