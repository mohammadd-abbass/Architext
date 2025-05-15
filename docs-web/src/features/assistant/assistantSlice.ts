import { createSlice } from '@reduxjs/toolkit';

interface AssistantState {
  config: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AssistantState = {
  config: null,
  loading: false,
  error: null,
};

const assistantSlice = createSlice({
  name: 'assistant',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setConfig: (state, action) => {
      state.config = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetConfig: (state) => {
      state.config = null;
      state.error = null;
    }
  }
});

export const { setLoading, setConfig, setError, resetConfig } = assistantSlice.actions;
export default assistantSlice.reducer;