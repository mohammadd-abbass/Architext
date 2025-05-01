import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export const checkFolderStructure = async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace open.');
        return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const userArchPath = path.join(rootPath, 'reference.arch.json');
    const defaultArchPath = path.join(__dirname, 'default.arch.json');

    let architecture: any;

    try {
        const archContent = fs.existsSync(userArchPath)
            ? fs.readFileSync(userArchPath, 'utf-8')
            : fs.readFileSync(defaultArchPath, 'utf-8');

        architecture = JSON.parse(archContent);
    } catch (error) {
        vscode.window.showErrorMessage('Failed to read reference architecture.');
        return;
    }

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
