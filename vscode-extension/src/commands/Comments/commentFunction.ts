import * as vscode from 'vscode';
import { commentCodeAPI } from '../../services/commentAPI';

export const commentFunction = async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    } 

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    const language = editor.document.languageId;

    try {
        vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Generating comments..."
        }, async () => {

            const result = await commentCodeAPI(selectedText, language); 
        
            const commentedCode = result.code;
        
            editor.edit(editBuilder => {
            editBuilder.replace(selection, commentedCode);
            });
        
            vscode.window.showInformationMessage('Comments added to selected code!');
        });


    }catch(error : any){
        vscode.window.showErrorMessage(`Failed to add comments: ${error.message}`);
    }
};