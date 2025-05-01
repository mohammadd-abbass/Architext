import * as fs from 'fs';
import * as path from 'path';
import { shouldIgnore } from './archIgnore';

export const readAllFiles = (
    dirPath: string,
    basePath: string,
    result: { path: string; type: 'file' | 'folder' }[],
    ignorePatterns: string[] = []
) => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        let relativePath = path.relative(basePath, fullPath);
        
        // Normalize path separators
        relativePath = relativePath.replace(/\\/g, '/');

        if (shouldIgnore(relativePath, ignorePatterns)) {
            continue;
        };

        if (entry.isDirectory()) {
            result.push({ path: relativePath, type: 'folder' });
            readAllFiles(fullPath, basePath, result, ignorePatterns);
        } else {
            result.push({ path: relativePath, type: 'file' });
        }
    }
};