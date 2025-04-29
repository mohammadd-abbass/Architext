

export const cleanCodeResponse = (rawCode: string) => {
    if (rawCode.startsWith("```")) {
        rawCode = rawCode.split('\n').slice(1).join('\n');

        if (rawCode.endsWith('```')) {
            rawCode = rawCode.slice(0, -3).trim();
        }
    }
    return rawCode.trim();
};
