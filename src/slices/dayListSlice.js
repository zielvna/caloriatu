import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const dayListSlice = createSlice({
    name: 'dayList',
    initialState,
    reducers: {
        addFood: (state, action) => {
            const { date, meal, food } = action.payload;
            let found = false;

            state.value = state.value.map((day) => {
                if (day.date === date) {
                    found = true;
                    day.meals[meal].push(food);
                    return day;
                } else {
                    return day;
                }
            });

            if (!found) {
                const newDay = {
                    date: date,
                    meals: {
                        breakfast: [],
                        lunch: [],
                        dinner: [],
                        snack: [],
                    },
                    water: 0,
                };

                newDay.meals[meal].push(food);

                state.value = [...state.value, newDay];
            }
        },
        editFood: (state, action) => {
            const { date, meal, food } = action.payload;

            state.value = state.value.map((day) => {
                if (day.date === date) {
                    day.meals[meal] = day.meals[meal].map((oldFood) => {
                        if (oldFood.id === food.id) {
                            return food;
                        } else {
                            return oldFood;
                        }
                    });
                    return day;
                } else {
                    return day;
                }
            });
        },
        removeFood: (state, action) => {
            const { date, meal, food } = action.payload;

            state.value = state.value.map((day) => {
                if (day.date === date) {
                    day.meals[meal] = day.meals[meal].filter((oldFood) => oldFood.id !== food.id);
                    return day;
                } else {
                    return day;
                }
            });
        },
        setWater: (state, action) => {
            const { date, water } = action.payload;
            found = false;

            state.value = state.value.map((day) => {
                if (day.date === date) {
                    found = true;
                    day.water = water;
                    return day;
                } else {
                    return day;
                }
            });

            if (!found) {
                const newDay = {
                    date: date,
                    meals: {
                        breakfast: [],
                        lunch: [],
                        dinner: [],
                        snack: [],
                    },
                    water: 0,
                };

                newDay.water = water;

                state.value = [...state.value, newDay];
            }
        },
    },
});

export const { addFood, editFood, removeFood, setWater } = dayListSlice.actions;

export default dayListSlice.reducer;
