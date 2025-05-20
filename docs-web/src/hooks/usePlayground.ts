import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useCallback } from 'react';
import playgroundService from '../features/playground/playgroundService';
import {
  setLoading,
  updateCode,
  setError,
  addResult
} from '../features/playground/playgroundSlice';

const usePlayground = () => {
  const dispatch = useDispatch();
  const { 
    results,
    currentCode,
    loading,
    error,
    isAnalyzing,
    isCommenting,
    isCheckingComplexity 
  } = useSelector((state: RootState) => state.playground);

  const handleError = useCallback((error: unknown, defaultMessage: string) => {
    if (error && typeof error === 'object' && 'response' in error) {
      const response = (error as { response?: { data?: { message?: string } } }).response;
      return response?.data?.message || defaultMessage;
    }
    return defaultMessage;
  }, []);

  const analyzeCode = useCallback(async (code: string, language: string) => {
    dispatch(setLoading('analyze'));
    try {
      const modifiedCode = await playgroundService.analyzeCode(code, language);
      dispatch(addResult({
        id: Date.now().toString(),
        type: 'ANALYZE',
        originalCode: code,
        modifiedCode,
        language,
        createdAt: new Date().toISOString()
      }));
      return modifiedCode;
    } catch (err) {
      dispatch(setError(handleError(err, 'Analysis failed')));
      throw err;
    }
  }, [dispatch, handleError]);

  const commentCode = useCallback(async (code: string, language: string) => {
    dispatch(setLoading('comment'));
    try {
      const modifiedCode = await playgroundService.commentCode(code, language);
      dispatch(addResult({
        id: Date.now().toString(),
        type: 'COMMENT',
        originalCode: code,
        modifiedCode,
        language,
        createdAt: new Date().toISOString()
      }));
      return modifiedCode;
    } catch (err) {
      dispatch(setError(handleError(err, 'Commenting failed')));
      throw err;
    }
  }, [dispatch, handleError]);

  const checkComplexity = useCallback(async (code: string, language: string) => {
    dispatch(setLoading('complexity'));
    try {
      const modifiedCode = await playgroundService.checkComplexity(code, language);
      dispatch(addResult({
        id: Date.now().toString(),
        type: 'COMPLEXITY',
        originalCode: code,
        modifiedCode,
        language,
        createdAt: new Date().toISOString()
      }));
      return modifiedCode;
    } catch (err) {
      dispatch(setError(handleError(err, 'Complexity check failed')));
      throw err;
    }
  }, [dispatch, handleError]);

  return {
    results,
    currentCode,
    loading,
    error,
    isAnalyzing,
    isCommenting,
    isCheckingComplexity,
    analyzeCode,
    commentCode,
    checkComplexity,
    updateCode: (code: string) => dispatch(updateCode(code))
  };
};

export default usePlayground;