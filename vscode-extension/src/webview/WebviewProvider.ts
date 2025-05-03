import * as vscode from 'vscode';
import * as path from 'path';
import { getWebviewContent } from './template';

export class WebviewProvider {
    private context: vscode.ExtensionContext;
    private currentPanel?: vscode.WebviewPanel;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public showReport(data: any) {
        if (this.currentPanel) {
            this.currentPanel.reveal(vscode.ViewColumn.One);
        } else {
            this.currentPanel = vscode.window.createWebviewPanel(
                'structureReport',
                'Project Structure Report',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    localResourceRoots: [
                        vscode.Uri.file(path.join(this.context.extensionPath, 'media'))
                    ]
                }
            );

            this.currentPanel.webview.html = getWebviewContent(
                this.context, 
                this.currentPanel.webview, 
                data
            );

            this.currentPanel.onDidDispose(() => {
                this.currentPanel = undefined;
            });

            this.currentPanel.webview.onDidReceiveMessage(message => {
                switch (message.command) {
                    case 'applySuggestion':
                        this.handleApplySuggestion(message.data);
                        break;
                }
            });
        }
    }

    private handleApplySuggestion(data: any) {
        vscode.window.showInformationMessage(`Applying suggestion: ${data.suggestion}`);
    }
}