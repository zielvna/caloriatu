import { configureStore } from '@reduxjs/toolkit';
import selectedDateReducer from '../slices/selectedDateSlice';

export const store = configureStore({
    reducer: { selectedDate: selectedDateReducer },
});
