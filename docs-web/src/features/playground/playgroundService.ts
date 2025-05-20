import apiClient from "../../services/axios";

export interface PlaygroundResult {
  id: string;
  type: 'COMMENT' | 'COMPLEXITY' | 'ANALYZE';
  code: string;
  result: string;
  createdAt: string;
}

export interface AnalysisResult {
  complexity?: number;
  comments?: string[];
  issues?: string[];
}

const playgroundService = {
  analyzeCode: async (code: string): Promise<AnalysisResult> => {
    const response = await apiClient.post('/playground/analyze', { code });
    return response.data.data.result;
  },

  commentCode: async (code: string): Promise<string[]> => {
    const response = await apiClient.post('/playground/comment', { code });
    return response.data.data.comments;
  },


};

export default playgroundService;