import path from 'path';
import * as vscode from 'vscode';

export const loadArchitecture = async (): Promise<any> => {
    const files = await vscode.workspace.findFiles('*.arch.json');

    try {
        if (files.length > 0) {
            const content = await vscode.workspace.fs.readFile(files[0]);
            console.log(`the following is the content: ${content}`);
            return JSON.parse(content.toString());
        } else {
            const defaultPath = path.join(__dirname, '..', 'src', 'default.arch.json');
            const uri = vscode.Uri.file(defaultPath);
            const content = await vscode.workspace.fs.readFile(uri);
            return JSON.parse(content.toString());
        }
    } catch (error) {
        vscode.window.showErrorMessage('Failed to load architecture file.');
        return null;
    }
};
