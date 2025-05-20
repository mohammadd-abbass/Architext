import { createSlice } from '@reduxjs/toolkit';
import { PlaygroundResult, AnalysisResult } from './playgroundService';

interface PlaygroundState {
  results: PlaygroundResult[];
  analysis: AnalysisResult | null;
  loading: boolean;
  error: string | null;
  isAnalyzing: boolean;
  isCommenting: boolean;
  isCheckingComplexity: boolean;
}

const initialState: PlaygroundState = {
  results: [],
  analysis: null,
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
    setAnalysis: (state, action: { payload: AnalysisResult }) => {
      state.analysis = action.payload;
      state.loading = false;
      state.isAnalyzing = false;
    },

  }
});


export default playgroundSlice.reducer;