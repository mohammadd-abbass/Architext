import * as vscode from 'vscode';
import { callFlaskAPI } from '../services/apiClient';

export async function commentCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
  
    const code = editor.document.getText();
    const language = editor.document.languageId;
    
    try {
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Generating comments..."
      }, async () => {
        const result = await callFlaskAPI('generateComments', {
            code,
            language
          });
      
          const commentedCode = result.code;
      
          editor.edit(editBuilder => {
            const fullRange = new vscode.Range(
              editor.document.positionAt(0),
              editor.document.positionAt(code.length)
            );
            editBuilder.replace(fullRange, commentedCode);
          });
          vscode.window.showInformationMessage('Comments added successfully!');
        });
      } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to add comments: ${error.message}`);
      }
}
