import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import dayListReducer from '../slices/dayListSlice';
import foodListReducer from '../slices/foodListSlice';
import selectReducer from '../slices/selectSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedFoodListReducer = persistReducer(persistConfig, foodListReducer);
const persistedDayListReducer = persistReducer(persistConfig, dayListReducer);

export const store = configureStore({
    reducer: { select: selectReducer, foodList: persistedFoodListReducer, dayList: persistedDayListReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
