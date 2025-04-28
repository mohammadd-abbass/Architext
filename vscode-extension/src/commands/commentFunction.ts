import * as vscode from 'vscode';
import { callFlaskAPI } from '../services/apiClient';

export async function commentFunction() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
  

}
