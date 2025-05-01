import * as vscode from 'vscode';
import { commentCode } from './commands/commentCode';
import { commentFunction } from './commands/commentFunction';
import { calculateComplexityCode } from './commands/calcComplexity';
import { calculateFunctionComplexity } from './commands/funcComplexity';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-extension" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-extension!');
	});
	
	const codeComments = vscode.commands.registerCommand('architext.addCodeComments', commentCode);

	const functionComment = vscode.commands.registerCommand('architext.commentSelectedCode', commentFunction);

	const codeComplexity = vscode.commands.registerCommand('architext.caculateCodeComplexity', calculateComplexityCode);

	const functionComplexity = vscode.commands.registerCommand('architext.complexitySelectedCode', calculateFunctionComplexity);

	context.subscriptions.push(disposable, codeComments, functionComment, codeComplexity,functionComplexity);
}

export function deactivate() {}
