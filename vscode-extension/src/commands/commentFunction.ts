import * as vscode from 'vscode';
import { callFlaskAPI } from '../services/apiClient';

export const commentFunction = async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    } 

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    const language = editor.document.languageId;

    try {
  
        const result = await callFlaskAPI('generateComments', {
            code: selectedText,
            language
        });
    
        const commentedCode = result.code;
        console.log(commentedCode);
    
        editor.edit(editBuilder => {
        editBuilder.replace(selection, commentedCode);
        });
    
        vscode.window.showInformationMessage('Comments added to selected code!');

    }catch(error : any){
        vscode.window.showErrorMessage(`Failed to add comments: ${error.message}`);
    }
};