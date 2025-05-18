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

export const transformRecommendedStructure = (data: any) => {
    const structure: { [key: string]: any } = {};
    
    Object.entries(data.recommendedStructure).forEach(([_, paths]) => {
        (paths as string[]).forEach(path => {
            const parts = path.split('/');
            let currentLevel = structure;
            
            parts.forEach(part => {
                if (!currentLevel[part]) {
                    currentLevel[part] = {};
                }
                currentLevel = currentLevel[part];
            });
        });
    });

    return structure;
};

