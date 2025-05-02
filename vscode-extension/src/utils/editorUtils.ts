import * as vscode from 'vscode';

type APICallFunction = (code: string, language: string) => Promise<{ code: string }>;

export const processEditorAction = async ({
    title,
    useSelection = false,
    apiCall,
    successMessage
}: {
    title: string;
    useSelection?: boolean;
    apiCall: APICallFunction;
    successMessage: string;
}) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('Focus on the need file.');
        return;
    };

    const language = editor.document.languageId;
    const selection = editor.selection;
    const isSelectionEmpty = selection.isEmpty;
    const code = useSelection && !isSelectionEmpty
        ? editor.document.getText(selection)
        : editor.document.getText();

    const replaceRange = useSelection && !isSelectionEmpty
        ? selection
        : new vscode.Range(
            editor.document.positionAt(0),
            editor.document.positionAt(code.length)
        );

    try {
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title
        }, async () => {
            const result = await apiCall(code, language);
            editor.edit(editBuilder => {
                editBuilder.replace(replaceRange, result.code);
            });
            vscode.window.showInformationMessage(successMessage);
        });
    } catch (error: any) {
        vscode.window.showErrorMessage(`${title} failed: ${error.message}`);
    }
};
