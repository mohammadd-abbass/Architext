import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import assistantReducer from '../features/assistant/assistantSlice';
import playgroundReducer from '../features/playground/playgroundSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    assistant: assistantReducer,
    playground: playgroundReducer,

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;