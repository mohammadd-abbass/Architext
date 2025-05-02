import { calculateComplexityAPI } from '../../services/complexityAPI';
import { processEditorAction } from '../../utils/editorUtils';

export const calculateComplexityCode = async () => {
    await processEditorAction({
        title: "Calculating complexity...",
        apiCall: calculateComplexityAPI,
        successMessage: "Complexity calculated successfully!"
    });
};