import { callFlaskAPI } from './apiClient';


interface FileItem {
    path: string;
    type: 'file' | 'folder';
}

export const checkArchitectureAPI = async (
    files: FileItem[],
    referenceArchitecture: any
) => {
    return await callFlaskAPI('/checkArchitecture', {
        files,
        referenceArchitecture
    });
};
