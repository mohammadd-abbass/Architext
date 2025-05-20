import { createSlice } from '@reduxjs/toolkit';
import { PlaygroundResult } from './playgroundService';

interface PlaygroundState {
  results: PlaygroundResult[];
  currentCode: string;
  loading: boolean;
  error: string | null;
  isAnalyzing: boolean;
  isCommenting: boolean;
  isCheckingComplexity: boolean;
}

const initialState: PlaygroundState = {
  results: [],
  currentCode: '',
  loading: false,
  error: null,
  isAnalyzing: false,
  isCommenting: false,
  isCheckingComplexity: false
};

const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    setLoading: (state, action: { payload: 'analyze' | 'comment' | 'complexity' }) => {
      state.loading = true;
      state.error = null;
      switch(action.payload) {
        case 'analyze': state.isAnalyzing = true; break;
        case 'comment': state.isCommenting = true; break;
        case 'complexity': state.isCheckingComplexity = true; break;
      }
    },
    updateCode: (state, action: { payload: string }) => {
      state.currentCode = action.payload;
    },
    setError: (state, action: { payload: string }) => {
      state.error = action.payload;
      state.loading = false;
      state.isAnalyzing = false;
      state.isCommenting = false;
      state.isCheckingComplexity = false;
    },
    addResult: (state, action: { payload: PlaygroundResult }) => {
      state.results.unshift(action.payload);
      state.currentCode = action.payload.modifiedCode;
      state.loading = false;
      switch(action.payload.type) {
        case 'ANALYZE': state.isAnalyzing = false; break;
        case 'COMMENT': state.isCommenting = false; break;
        case 'COMPLEXITY': state.isCheckingComplexity = false; break;
      }
    }
  }
});

export const { 
  setLoading, 
  updateCode,
  setError,
  addResult 
} = playgroundSlice.actions;

export default playgroundSlice.reducer;