import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './dataSlice';


export const store = configureStore({
  reducer: {
    auth: AuthSlice
  },
});

// Types globaux pour le typage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
