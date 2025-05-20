import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useCallback } from 'react';
import playgroundService from '../features/playground/playgroundService';
import {
  setLoading,
  setAnalysis,
  setComments,
  setComplexity,
  setError,
  addResult
} from '../features/playground/playgroundSlice';

const usePlayground = () => {
  const dispatch = useDispatch();
  const { 
    results,
    analysis,
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

  const analyzeCode = useCallback(async (code: string) => {
    dispatch(setLoading('analyze'));
    try {
      const result = await playgroundService.analyzeCode(code);
      dispatch(setAnalysis(result));
      dispatch(addResult({
        id: Date.now().toString(),
        type: 'ANALYZE',
        code,
        result,
        createdAt: new Date().toISOString()
      }));
    } catch (err) {
      dispatch(setError(handleError(err, 'Analysis failed')));
    }
  }, [dispatch, handleError]);

  const commentCode = useCallback(async (code: string) => {
    dispatch(setLoading('comment'));
    try {
      const comments = await playgroundService.commentCode(code);
      dispatch(setComments(comments));
      dispatch(addResult({
        id: Date.now().toString(),
        type: 'COMMENT',
        code,
        result: comments,
        createdAt: new Date().toISOString()
      }));
    } catch (err) {
      dispatch(setError(handleError(err, 'Commenting failed')));
    }
  }, [dispatch, handleError]);

  const checkComplexity = useCallback(async (code: string) => {
    dispatch(setLoading('complexity'));
    try {
      const complexity = await playgroundService.checkComplexity(code);
      dispatch(setComplexity(complexity));
      dispatch(addResult({
        id: Date.now().toString(),
        type: 'COMPLEXITY',
        code,
        result: complexity,
        createdAt: new Date().toISOString()
      }));
    } catch (err) {
      dispatch(setError(handleError(err, 'Complexity check failed')));
    }
  }, [dispatch, handleError]);

  return {
    results,
    analysis,
    loading,
    error,
    isAnalyzing,
    isCommenting,
    isCheckingComplexity,
    analyzeCode,
    commentCode,
    checkComplexity
  };
};

export default usePlayground;