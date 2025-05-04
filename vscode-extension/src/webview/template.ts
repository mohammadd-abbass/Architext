import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { getNonce } from '../utils/getNonce'; 
import { renderFolderStructure, getIssueIcon } from '../utils/stuctureParser';

export const getWebviewContent =  (
    context: vscode.ExtensionContext,
    webview: vscode.Webview,
    data: any
): string => {
    const nonce = getNonce();

    const templatePath = path.join(context.extensionPath,'src', 'webview', 'template.html');
    let template = fs.readFileSync(templatePath, 'utf-8');

    const scriptUri = webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath,'src', 'webview', 'static', 'scripts', 'main.js'))
    );

    const stylesMainUri = webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath,'src', 'webview', 'static', 'styles', 'main.css'))
    );

    const stylesIssuesUri = webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath,'src', 'webview', 'static', 'styles', 'issues.css'))
    );

    // Replace template variables
    template = template
        .replace(/\${webview.cspSource}/g, webview.cspSource)
        .replace(/\${nonce}/g, nonce)
        .replace(/\${scriptUri}/g, scriptUri.toString())
        .replace(/\${stylesMainUri}/g, stylesMainUri.toString())
        .replace(/\${stylesIssuesUri}/g, stylesIssuesUri.toString())
        .replace(/\${data\.summary}/g, data.summary)
        .replace(/\${data\.issues\.length}/g, data.issues.length.toString())
        .replace('${renderFolderStructure(data.recommendedStructure)}', renderFolderStructure(data.recommendedStructure));

    // Dynamically inject issue cards
    const issueCardsHtml = data.issues.map((issue: any) => `
        <div class="issue-card ${issue.type}">
            <div class="issue-header">
                <span class="icon ${getIssueIcon(issue.type)}"></span>
                <h3>${issue.message}</h3>
            </div>
            <div class="issue-details">
                <p><strong>Path:</strong> ${issue.filePath || issue.folderPath}</p>
                <p><strong>Suggested Action:</strong> ${issue.suggestion}</p>
                <button class="action-button" 
                        data-command="applySuggestion" 
                        data-suggestion="${escapeHtml(issue.suggestion)}">
                    Apply Suggestion
                </button>
            </div>
        </div>
    `).join('');

    template = template.replace('<!-- ISSUE_CARDS_PLACEHOLDER -->', issueCardsHtml);

    return template;
};

const escapeHtml = (text: string): string => {
    return text.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&#039;');
};
