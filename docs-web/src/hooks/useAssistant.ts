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

const useAssistant = () => {
  const dispatch = useDispatch();
  const { config, loading, error } = useSelector((state: RootState) => state.assistant);

  const generateConfig = useCallback(async (configInput: string) => {
    dispatch(setLoading());
    try {
      const { result } = await assistantService.generateConfig(configInput);
      dispatch(setConfig(result));
    } catch (err: unknown) {
      let errorMessage = 'Failed to generate config';
      if (err && typeof err === 'object' && 'response' in err) {
        const response = (err as { response?: { data?: { message?: string } } }).response;
        errorMessage = response?.data?.message || errorMessage;
      }
      dispatch(setError(errorMessage));
    }
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetConfig());
  }, [dispatch]);

  return {
    config,
    loading,
    error,
    generateConfig,
    resetConfig: reset,
  };
};

export default useAssistant;