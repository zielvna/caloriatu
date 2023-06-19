import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistCombineReducers, persistStore } from 'redux-persist';
import dayListReducer from '../slices/dayListSlice';
import foodListReducer from '../slices/foodListSlice';
import selectReducer from '../slices/selectSlice';
import settingsReducer from '../slices/settingsSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducers = persistCombineReducers(persistConfig, {
    select: selectReducer,
    foodList: foodListReducer,
    dayList: dayListReducer,
    settings: settingsReducer,
});

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
