import * as fs from 'fs';
import * as path from 'path';

import * as vscode from 'vscode';

export const loadArchIgnore = async (context: vscode.ExtensionContext): Promise<string[]> => {
    try {
        // Get path relative to extension installation
        const ignoreUri = vscode.Uri.joinPath(context.extensionUri, '.archignore');
        console.log('Loading archignore from:', ignoreUri.fsPath);
        
        const content = new TextDecoder().decode(
            await vscode.workspace.fs.readFile(ignoreUri)
        );
        
        return content.split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('#'));
    } catch (error) {
        console.error('Error loading built-in .archignore:', error);
        return [];
    }
};

export const shouldIgnore = (relativePath: string, ignorePatterns: string[]): boolean => {
    console.log("Hello from the should ignore function");
    return ignorePatterns.some(pattern => {
        // Handle directory patterns
        if (pattern.endsWith('/')) {
            const dirPattern = pattern.replace(/\/$/, '');
            return relativePath.startsWith(dirPattern + '/') || relativePath === dirPattern;
        }
        
        // Handle wildcards
        if (pattern.includes('*')) {
            const regex = new RegExp(`^${pattern.replace(/\*/g, '.*').replace(/\//g, '\\/')}$`);
            return regex.test(relativePath);
        }
        
        // Exact match
        return relativePath === pattern;
    });
};