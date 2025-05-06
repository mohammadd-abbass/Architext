import * as vscode from 'vscode';
import { analyzeCode } from '../../services/analyzeAPI';
import { loadArchitecture } from '../../utils/loadArchitecture';

export const analyzeCurrentFile = async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active editor with a file to analyze.');
        return;
    }

    const document = editor.document;
    const code = document.getText();
    const languageId = document.languageId;
    const referenceArchitecture = await loadArchitecture();

    if (!referenceArchitecture) {
        vscode.window.showErrorMessage('Reference architecture not found.');
        return;
    }

    try {
        vscode.window.withProgress(
            {
                location: vscode.ProgressLocation.Notification,
                title: "Analyzing code structure...",
            },
            async () => {
                const response = await analyzeCode(code, languageId, referenceArchitecture);
                const parsed = JSON.parse(response.result);

                const diagnostics: vscode.Diagnostic[] = parsed.diagnostics.map((item: any) => {
                    const range = new vscode.Range(
                        new vscode.Position(item.range.start.line, item.range.start.character),
                        new vscode.Position(item.range.end.line, item.range.end.character)
                    );

                    const severityMap = {
                        error: vscode.DiagnosticSeverity.Error,
                        warning: vscode.DiagnosticSeverity.Warning,
                        info: vscode.DiagnosticSeverity.Information,
                        hint: vscode.DiagnosticSeverity.Hint
                    };

                    return new vscode.Diagnostic(
                        range,
                        item.message,
                        severityMap[item.severity as keyof typeof severityMap] || vscode.DiagnosticSeverity.Warning
                    );
                });

                const diagnosticCollection = vscode.languages.createDiagnosticCollection('codeAnalysis');
                diagnosticCollection.set(document.uri, diagnostics);
                
                vscode.window.showInformationMessage(`Analysis completed with ${diagnostics.length} issue(s).`);
            }
        );
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to analyze code: ${error.message}`);
    }
};
