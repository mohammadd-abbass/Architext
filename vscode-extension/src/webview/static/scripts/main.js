(function() {
    const vscode = acquireVsCodeApi();
    
    document.querySelectorAll('[data-command]').forEach(button => {
        button.addEventListener('click', () => {
            const command = button.dataset.command;
            const suggestion = button.dataset.suggestion;
            
            vscode.postMessage({
                command: command,
                data: {
                    suggestion: suggestion,
                    issueType: button.closest('.issue-card').classList[1]
                }
            });
        });
    });

    document.querySelectorAll('.issue-header').forEach(header => {
        header.addEventListener('click', () => {
            const details = header.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
})();