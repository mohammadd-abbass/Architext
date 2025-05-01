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

    const entries: { path: string; type: 'file' | 'folder' }[] = [];
    readAllFiles(rootPath, rootPath, entries);

    try {
        console.log("hello");
        const response = await checkArchitectureAPI(entries, architecture);
        console.log(response);
        console.log("hello response");
        if (response.success) {
            vscode.window.showInformationMessage('Folder structure is valid.');
        } else {
            vscode.window.showWarningMessage(`Issues found: ${response.message || 'Structure mismatch.'}`);
            console.log(response);
        }
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to validate architecture: ${error.message}`);
    }
};
