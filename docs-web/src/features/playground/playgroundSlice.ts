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
    setComments: (state, action: { payload: string[] }) => {
      if (state.analysis) {
        state.analysis.comments = action.payload;
      }
      state.loading = false;
      state.isCommenting = false;
    },
    setComplexity: (state, action: { payload: number }) => {
      if (state.analysis) {
        state.analysis.complexity = action.payload;
      }
      state.loading = false;
      state.isCheckingComplexity = false;
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
    }
  }
});


export default playgroundSlice.reducer;