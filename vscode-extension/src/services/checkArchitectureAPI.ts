import { callFlaskAPI } from './apiClient';

export const checkArchitectureAPI = async (
    paths: string[],
    referenceArchitecture: any
) => {
    return await callFlaskAPI('checkArchitecture', {
        paths,
        referenceArchitecture
    });
};
