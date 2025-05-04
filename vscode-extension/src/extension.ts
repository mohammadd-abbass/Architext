import * as vscode from 'vscode';
import { registerCommands } from './commands';


export function activate(context: vscode.ExtensionContext) {

	console.log('Architext is Active!');

	registerCommands(context);
}

export function deactivate() {}
