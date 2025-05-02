import * as vscode from 'vscode';
import { checkArchitecture } from './checkArchitecture';
import { commentCode } from './commentCode';
import { commentFunction } from './commentFunction';
import { calculateComplexityCode } from './calcComplexity';
import { calculateFunctionComplexity } from './funcComplexity';

export const registerCommands = (context: vscode.ExtensionContext) => {
    context.subscriptions.push(
        vscode.commands.registerCommand('architext.checkArchitecture', () => checkArchitecture(context)),
        vscode.commands.registerCommand('architext.addCodeComments', commentCode),
        vscode.commands.registerCommand('architext.commentSelectedCode', commentFunction),
        vscode.commands.registerCommand('architext.caculateCodeComplexity', calculateComplexityCode),
        vscode.commands.registerCommand('architext.complexitySelectedCode', calculateFunctionComplexity)
    );
};
