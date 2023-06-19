import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const dayListSlice = createSlice({
    name: 'dayList',
    initialState,
    reducers: {
        add: (state, action) => {
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
                };

                newDay.meals[meal].push(food);

                state.value = [...state.value, newDay];

                console.log(state.value);
            }
        },
        update: (state, action) => {
            const { date, meal, food } = action.payload;

            state.value = state.value.map((day) => {
                console.log(day, date, meal);
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

            console.log(state.value);
        },
        remove: (state, action) => {
            const { date, meal, food } = action.payload;

            state.value = state.value.map((day) => {
                if (day.date === date) {
                    day.meals[meal] = day.meals[meal].filter((oldFood) => oldFood.id !== food.id);
                    return day;
                } else {
                    return day;
                }
            });

            console.log(state.value);
        },
    },
});

export const { add, update, remove } = dayListSlice.actions;

export default dayListSlice.reducer;
