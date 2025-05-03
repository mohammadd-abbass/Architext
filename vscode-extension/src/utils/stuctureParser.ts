export const renderFolderStructure = (structure: any): string => {
    function renderNode(node: any, depth = 0): string {
        return Object.keys(node).map(key => {
            const isFolder = typeof node[key] === 'object' && node[key] !== null;
            const children = isFolder ? renderNode(node[key], depth + 1) : '';
            return `
                <div class="folder-level" style="padding-left: ${depth * 15}px">
                    ${isFolder ? '📂' : '📄'} ${key}
                    ${children}
                </div>
            `;
        }).join('');
    }
    return renderNode(structure);
};


export const getIssueIcon = (issueType: 'missing-folder' | 'misplaced-file' | 'extraneous-folder'): string => {
    const icons = {
        'missing-folder': 'warning',
        'misplaced-file': 'move',
        'extraneous-folder': 'delete'
    };
    return icons[issueType] || 'info';
};