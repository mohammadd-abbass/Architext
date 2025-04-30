import * as vscode from 'vscode';
import { callFlaskAPI } from '../services/apiClient';

export const calculateFunctionComplexity = async () => {
    const editor = vscode.window.activeTextEditor;
    if(!editor) {
        return;
    }

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    const language = editor.document.languageId;

    try {
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Calculating complexity..."
        }, async () => {
            const result = await callFlaskAPI('calculateComplexity', {
                code: selectedText,
                language
            });

            const commentedCode = result.code;
        
            editor.edit(editBuilder => {
            editBuilder.replace(selection, commentedCode);
            });
        
            vscode.window.showInformationMessage('Complexity calculated of the selected code!');
        });
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to calculate complexity: ${error.message}`);
    }
};