import * as vscode from 'vscode';
import { checkArchitecture } from './Architecture/checkArchitecture';
import { analyzeCurrentFile } from './Architecture/analyzeCode';
import { commentCode } from './Comments/commentCode';
import { commentFunction } from './Comments/commentFunction';
import { calculateComplexityCode } from './Complexity/calcComplexity';
import { calculateFunctionComplexity } from './Complexity/funcComplexity';

export const registerCommands = (context: vscode.ExtensionContext) => {
    context.subscriptions.push(
        vscode.commands.registerCommand('architext.checkArchitecture', () => checkArchitecture(context)),
        vscode.commands.registerCommand('architext.analyzeCode', analyzeCurrentFile),
        vscode.commands.registerCommand('architext.addCodeComments', commentCode),
        vscode.commands.registerCommand('architext.commentSelectedCode', commentFunction),
        vscode.commands.registerCommand('architext.caculateCodeComplexity', calculateComplexityCode),
        vscode.commands.registerCommand('architext.complexitySelectedCode', calculateFunctionComplexity),
        vscode.commands.registerCommand('architext.complexitySelectedCode', calculateFunctionComplexity)
    );
};
