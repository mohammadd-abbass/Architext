import * as vscode from 'vscode';
import { commentCode } from './commands/commentCode';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-extension" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-extension!');
	});
	
	const comments = vscode.commands.registerCommand('extension.addCodeComments', commentCode);

	context.subscriptions.push(disposable, comments);
}

export function deactivate() {}
