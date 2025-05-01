import * as fs from 'fs';
import * as path from 'path';

export const loadArchIgnore = (basePath: string): string[] => {
    const ignorePath = path.join(basePath, '.archignore');
    if (!fs.existsSync(ignorePath)) {
        return[];
    };

    const lines = fs.readFileSync(ignorePath, 'utf-8').split(/\r?\n/);
    return lines
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'));
};

export const shouldIgnore = (relativePath: string, ignorePatterns: string[]): boolean => {
    return ignorePatterns.some(pattern => {
        if (pattern.endsWith('/')) {
            return relativePath.startsWith(pattern);
        } else if (pattern.includes('*')) {
            const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
            return regex.test(relativePath);
        } else {
            return relativePath === pattern;
        }
    });
};
