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

