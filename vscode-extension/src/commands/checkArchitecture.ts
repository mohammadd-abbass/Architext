import * as vscode from 'vscode';
import * as path from 'path';
import { loadArchitecture } from '../utils/loadArchitecture';
import { readAllFiles } from '../utils/readAllFiles';
import { checkArchitectureAPI } from '../services/checkArchitectureAPI';

export const checkArchitecture = async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace open.');
        return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const architecture = await loadArchitecture();
    if (!architecture) {
        vscode.window.showErrorMessage('Reference architecture not found.');
        return;
    }

    const paths: string[] = [];
    readAllFiles(rootPath, rootPath, paths);

    try {
        const response = await checkArchitectureAPI(paths, architecture);
        
        if (response.success) {
            vscode.window.showInformationMessage('Folder structure is valid.');
        } else {
            vscode.window.showWarningMessage(`Issues found: ${response.message || 'Structure mismatch.'}`);
        }
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to validate architecture: ${error.message}`);
    }
};
