import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { renderFolderStructure, getIssueIcon } from '../utils/renderFolderStructure';

// Utility to generate a random nonce for CSP
function getNonce(): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function getWebviewContent(
  context: vscode.ExtensionContext,
  webview: vscode.Webview,
  data: any
): string {
  const nonce = getNonce();

  // Paths to our static files in the extension
  const scriptPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, 'src', 'webview', 'static', 'scripts', 'main.js')
  );
  const styleMainPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, 'src', 'webview', 'static', 'styles', 'main.css')
  );
  // You can add additional style files similarly
  const styleIssuesPathOnDisk = styleMainPathOnDisk;

  // Convert to webview URIs
  const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
  const stylesMainUri = webview.asWebviewUri(styleMainPathOnDisk);
  const stylesIssuesUri = webview.asWebviewUri(styleIssuesPathOnDisk);

  // Load the HTML template
  const templatePath = path.join(context.extensionPath, 'src', 'webview', 'template.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const html = new Function(
    'data', 'nonce', 'scriptUri', 'stylesMainUri', 'stylesIssuesUri', 'getIssueIcon', 'renderFolderStructure',
    `return \`${template}\`;`
  )(
    data,
    nonce,
    scriptUri.toString(),
    stylesMainUri.toString(),
    stylesIssuesUri.toString(),
    getIssueIcon,
    renderFolderStructure
  );

  return html;
}
