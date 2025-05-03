import { calculateComplexityAPI } from '../../services/complexityAPI';
import { processEditorAction } from '../../utils/editorUtils';

export const calculateFunctionComplexity = async () => {
    await processEditorAction({
        title: "Calculating complexity...",
        useSelection: true,
        apiCall: calculateComplexityAPI,
        successMessage: "Complexity calculated of the selected code!"
    });
};