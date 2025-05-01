import * as fs from 'fs';
import * as path from 'path';

export const readAllFiles = (
    rootPath: string,
    dirPath: string,
    files: { path: string; content: string }[]
) => {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relPath = path.relative(rootPath, fullPath);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            readAllFiles(rootPath, fullPath, files);
        } else {
            const content = fs.readFileSync(fullPath, 'utf-8');
            files.push({ path: relPath, content });
        }
    }
};
