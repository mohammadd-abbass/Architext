import { callFlaskAPI } from './apiClient';


export const analyzeCode = async (
    code: string,
    language: string,
    referenceArchitecture: any
) => {
    return await callFlaskAPI('/checkArchitecture', {
        code,
        language,
        referenceArchitecture
    });
};
