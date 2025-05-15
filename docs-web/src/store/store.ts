import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import assistantReducer from '../features/assistant/assistantSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    assistant: assistantReducer,

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;