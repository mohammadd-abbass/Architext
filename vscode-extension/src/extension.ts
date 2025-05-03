import * as vscode from 'vscode';
import { registerCommands } from './commands';
import { WebviewProvider } from './webview/WebviewProvider';


export function activate(context: vscode.ExtensionContext) {

	const provider = new WebviewProvider(context);

	console.log('Architext is Active!');

	registerCommands(context);

	const disposable = vscode.commands.registerCommand('architext.checkArchitecture', async () => {
        // Simulate the response you'd get from the AI or architecture check
        const testData = {
            summary: "Architecture Check Complete",
            issues: [
                {
                    type: 'missing-folder',
                    message: 'Missing folder: `services`',
                    folderPath: 'src/',
                    suggestion: 'Create a `services` folder inside `src/`'
                },
                {
                    type: 'misplaced-file',
                    message: 'File `auth.js` should be inside `services`',
                    filePath: 'src/auth.js',
                    suggestion: 'Move `auth.js` to `src/services/`'
                }
            ],
            recommendedStructure: {
                src: {
                    components: {},
                    services: {
                        auth: {}
                    },
                    utils: {}
                }
            }
        };

        provider.showReport(testData);
    });

    context.subscriptions.push(disposable);

}

export function deactivate() {}
