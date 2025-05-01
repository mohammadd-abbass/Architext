import { callFlaskAPI } from './apiClient';

export const checkArchitectureAPI = async (
    files: { path: string; content: string }[],
    referenceArchitecture: any
) => {
    return await callFlaskAPI('checkArchitecture', {
        files,
        referenceArchitecture
    });
};
