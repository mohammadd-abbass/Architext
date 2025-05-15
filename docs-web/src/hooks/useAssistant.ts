import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useCallback } from 'react';
import assistantService from '../features/assistant/assistantService';
import {
  setLoading,
  setConfig,
  setError,
  resetConfig,
} from '../features/assistant/assistantSlice';

