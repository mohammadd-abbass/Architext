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

