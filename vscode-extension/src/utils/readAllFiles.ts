import * as fs from 'fs';
import * as path from 'path';

export const readAllFiles = (
    rootPath: string,
    dirPath: string,
    paths: string[]
) => {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relPath = path.relative(rootPath, fullPath);
        const stats = fs.statSync(fullPath);

        paths.push(relPath);

        if (stats.isDirectory()) {
            readAllFiles(rootPath, fullPath, paths);
        }
    }
};