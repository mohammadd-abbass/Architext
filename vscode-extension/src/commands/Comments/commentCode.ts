import { processEditorAction } from '../../utils/editorUtils';
import { commentCodeAPI } from '../../services/commentAPI';

export const commentCode = async () => {
    await processEditorAction({
        title: "Generating comments...",
        apiCall: commentCodeAPI,
        successMessage: "Comments added successfully!"
    });
};