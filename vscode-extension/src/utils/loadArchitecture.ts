import * as vscode from 'vscode';


export const loadArchitecture = async () => {
    const files = await vscode.workspace.findFiles('*.arch.json');
    if (files.length) {
      const content = await vscode.workspace.fs.readFile(files[0]);
      return JSON.parse(content.toString());
    } else {
      const defaultArch = require('../default.arch.json');
      return defaultArch;
    }
};


