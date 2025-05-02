import * as vscode from 'vscode';
import { callFlaskAPI } from '../../services/apiClient';

export const calculateComplexityCode = async () => {
    const editor = vscode.window.activeTextEditor;
    if(!editor) {
        return;
    }

    const code = editor.document.getText();
    const language = editor.document.languageId;

    try {
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Calculating complexity..."
        }, async () => {
            const result = await callFlaskAPI('calculateComplexity', {
                code,
                language
            });

            const responseCode = result.code;

            editor.edit(editBuilder => {
                const fullRange = new vscode.Range(
                    editor.document.positionAt(0),
                    editor.document.positionAt(code.length)
                );
                editBuilder.replace(fullRange, responseCode);
            });
            vscode.window.showInformationMessage('Complexity calculated successfully!');
        });
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to calculate complexity: ${error.message}`);
    }
};