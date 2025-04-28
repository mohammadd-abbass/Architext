import * as vscode from 'vscode';
import { callFlaskAPI } from '../services/apiClient';

export async function commentFunction() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
  
    const code = editor.document.getText();
    const language = editor.document.languageId;
  
    try {

      } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to add comments: ${error.message}`);
      }
}
