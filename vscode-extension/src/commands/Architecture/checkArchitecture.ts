import * as vscode from 'vscode';
import { loadArchitecture } from '../../utils/loadArchitecture';
import { readAllFiles } from '../../utils/readAllFiles';
import { checkArchitectureAPI } from '../../services/checkArchitectureAPI';
import { loadArchIgnore } from '../../utils/archIgnore';
import { WebviewProvider } from '../../webview/WebviewProvider';

export const checkArchitecture = async (context: vscode.ExtensionContext) => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace open.');
        return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const architecture = await loadArchitecture();
    if (!architecture) {
        vscode.window.showErrorMessage('Reference architecture not found.');
        return;
    }

    const entries: { path: string; type: 'file' | 'folder' }[] = [];
    const ignorePatterns = loadArchIgnore(context);

    readAllFiles(rootPath, rootPath, entries, await ignorePatterns);

    try {
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Checking architecture..."
        }, async () => {
        const response = await checkArchitectureAPI(entries, architecture);

        console.log("the following is the response: ",response);

        const parsedResult = response.result;
        console.log(parsedResult);
        const dataForWebview = {
            summary: parsedResult.summary || "Check completed",
            issues: parsedResult.issues, 
            recommendedStructure: parsedResult.recommendedStructure,
        };

        const provider = new WebviewProvider(context);
        provider.showReport(dataForWebview);
    });
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to validate architecture: ${error.message}`);
    }
};
