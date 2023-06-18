import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const foodListSlice = createSlice({
    name: 'foodList',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        add: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        update: (state, action) => {
            state.value = state.value.map(({ id }) => {
                if (id === action.payload.id) {
                    return action.payload;
                } else {
                    return foodListItem;
                }
            });
        },
        remove: (state, action) => {
            state.value = state.value.filter(({ id }) => id !== action.payload.id);
        },
    },
});

export const { set, add, update, remove } = foodListSlice.actions;

export default foodListSlice.reducer;
