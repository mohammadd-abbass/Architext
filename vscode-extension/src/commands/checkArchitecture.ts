import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { loadArchitecture } from '../utils/loadArchitecture'; // update path as needed

export const checkArchitecture = async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace open.');
        return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;

    const architecture = await loadArchitecture();
    
    if (!architecture) {
        return;
    };

    const missingFolders: string[] = [];

    for (const [layer, paths] of Object.entries(architecture.layers)) {
        for (const relPath of paths as string[]) {
            const fullPath = path.join(rootPath, relPath);
            if (!fs.existsSync(fullPath)) {
                missingFolders.push(relPath);
            }
        }
    }

    if (missingFolders.length > 0) {
        vscode.window.showWarningMessage(`Missing folders: ${missingFolders.join(', ')}`);
    } else {
        vscode.window.showInformationMessage('Folder structure matches reference architecture.');
    }
};
