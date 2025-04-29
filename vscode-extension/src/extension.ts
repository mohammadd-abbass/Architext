import * as vscode from 'vscode';
import { commentCode } from './commands/commentCode';
import { commentFunction } from './commands/commentFunction';
import { calculateComplexityCode } from './commands/calcComplexity';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-extension" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-extension!');
	});
	
	const codeComments = vscode.commands.registerCommand('extension.addCodeComments', commentCode);

	const functionComment = vscode.commands.registerCommand('extension.commentSelectedCode', commentFunction);

	const codeComplexity = vscode.commands.registerCommand('extension.caculateCodeComplexity', calculateComplexityCode);

	context.subscriptions.push(disposable, codeComments, functionComment);
}

export function deactivate() {}
