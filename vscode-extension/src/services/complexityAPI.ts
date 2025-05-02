import { callFlaskAPI } from './apiClient';

export const calculateComplexityAPI = async (code: string, language: string) => {
    return await callFlaskAPI('calculateComplexity', {
        code,
        language
    });
};