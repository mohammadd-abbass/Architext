import { callFlaskAPI } from './apiClient';


export const analyzeCode = async (
    code: string,
    language: string,
    referenceArchitecture: any
) => {
    return await callFlaskAPI('/analyze', {
        code,
        language,
        referenceArchitecture
    });
};
