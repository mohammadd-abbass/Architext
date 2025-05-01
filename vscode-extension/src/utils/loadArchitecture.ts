import * as vscode from 'vscode';

export const loadArchitecture = async (): Promise<any> => {
    const files = await vscode.workspace.findFiles('*.arch.json');

    try {
        if (files.length > 0) {
            const content = await vscode.workspace.fs.readFile(files[0]);
            return JSON.parse(content.toString());
        } else {
            const defaultArch = require('../default.arch.json');
            return defaultArch;
        }
    } catch (error) {
        vscode.window.showErrorMessage('Failed to load architecture file.');
        return null;
    }
};
