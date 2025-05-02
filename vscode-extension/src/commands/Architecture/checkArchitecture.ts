import * as vscode from 'vscode';
import * as path from 'path';
import { loadArchitecture } from '../../utils/loadArchitecture';
import { readAllFiles } from '../../utils/readAllFiles';
import { checkArchitectureAPI } from '../../services/checkArchitectureAPI';
import { loadArchIgnore } from '../../utils/archIgnore';

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
        console.log("hello");
        const response = await checkArchitectureAPI(entries, architecture);
        console.log(response);
        console.log("hello response");
        const parsedResult = JSON.parse(response.result);
        if (parsedResult?.message) {
            vscode.window.showInformationMessage(parsedResult.message);
        }

        if (parsedResult?.issues?.length > 0) {
            for (const issue of parsedResult.issues) {
                vscode.window.showWarningMessage(issue);
            }
        }
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to validate architecture: ${error.message}`);
    }
};
