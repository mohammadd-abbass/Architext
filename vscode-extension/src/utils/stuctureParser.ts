const renderFolderStructure = (structure: any): string => {
    function renderNode(node: any, depth = 0): string {
        return Object.keys(node).map(key => `
            <div class="folder-level" style="padding-left: ${depth * 15}px">
                📂 ${key}
                ${node[key] ? renderNode(node[key], depth + 1) : ''}
            </div>
        `).join('');
    }
    return renderNode(structure);
}

const getIssueIcon = (issueType: 'missing-folder' | 'misplaced-file' | 'extraneous-folder'): string => {
    const icons = {
        'missing-folder': 'warning',
        'misplaced-file': 'move',
        'extraneous-folder': 'delete'
    };
    return icons[issueType] || 'info';
}