import * as vscode from 'vscode';
import { commentCode } from './commands/commentCode';
import { commentFunction } from './commands/commentFunction';
import { calculateComplexityCode } from './commands/calcComplexity';
import { calculateFunctionComplexity } from './commands/funcComplexity';
import { checkArchitecture } from './commands/checkArchitecture';


export function activate(context: vscode.ExtensionContext) {

	console.log('Architext is Active!');

	
	const codeComments = vscode.commands.registerCommand('architext.addCodeComments', commentCode);

	const functionComment = vscode.commands.registerCommand('architext.commentSelectedCode', commentFunction);

	const codeComplexity = vscode.commands.registerCommand('architext.caculateCodeComplexity', calculateComplexityCode);

	const functionComplexity = vscode.commands.registerCommand('architext.complexitySelectedCode', calculateFunctionComplexity);

	const checkProjectArchitecture = vscode.commands.registerCommand('architext.checkArchitecture', () => checkArchitecture(context));

	context.subscriptions.push(codeComments, functionComment, codeComplexity, functionComplexity, checkProjectArchitecture);
}

export function deactivate() {}
