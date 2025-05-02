import { callFlaskAPI } from './apiClient';

export const commentCodeAPI = async (code: string, language: string) => {
    return await callFlaskAPI('generateComments', {
        code,
        language
    });
};
