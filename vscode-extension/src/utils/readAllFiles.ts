import * as fs from 'fs';
import * as path from 'path';

export const readAllFiles = (
    dirPath: string,
    basePath: string,
    result: { path: string; type: 'file' | 'folder' }[]
) => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relativePath = path.relative(basePath, fullPath).replace(/\\/g, '/');

        if (relativePath.startsWith('node_modules')) {
            continue;
        }

        if (entry.isDirectory()) {
            result.push({ path: relativePath, type: 'folder' });
            readAllFiles(fullPath, basePath, result);
        } else {
            result.push({ path: relativePath, type: 'file' });
        }
    }
};
