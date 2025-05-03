import { commentCodeAPI } from '../../services/commentAPI';
import { processEditorAction } from '../../utils/editorUtils';


export const commentFunction = async () => {
    await processEditorAction({
        title: "Generating comments...",
        useSelection: true,
        apiCall: commentCodeAPI,
        successMessage: "Comments added to selected code!"
    });
};