// store.ts
import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from '@/redux/features/UserSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, UserSliceReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    // middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger),

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
