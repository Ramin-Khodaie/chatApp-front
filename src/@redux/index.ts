import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import rootReducers from './reducers';


const persistConfig = {
    key: 'root',
    whitelist: ['storage'],
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: false,
            serializableCheck: false
        })
    }
})


export const persistor = persistStore(store);
export type Store = typeof store;
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch;