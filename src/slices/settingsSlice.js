import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        isProfileCompleted: false,
        gender: null,
        age: null,
        height: null,
        currentWeight: null,
        goalWeight: null,
        weeklyWeightLoseGoal: null,
        activity: null,
    },
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeSettings: (state, action) => {
            state.value = action.payload;

            console.log(action.payload);
        },
    },
});

export const { changeSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
