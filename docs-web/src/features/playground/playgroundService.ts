import apiClient from "../../services/axios";

export interface PlaygroundResult {
  id: string;
  type: 'COMMENT' | 'COMPLEXITY' | 'ANALYZE';
  originalCode: string;
  modifiedCode: string;
  language: string;
  createdAt: string;
}

const playgroundService = {
  analyzeCode: async (code: string, language: string): Promise<string> => {
    const response = await apiClient.post('/playground/analyze', { 
      code,
      language 
    });
    return response.data.data.modifiedCode;
  },

  commentCode: async (code: string, language: string): Promise<string> => {
    const response = await apiClient.post('/playground/comment', { 
      code,
      language 
    });
    return response.data.data.modifiedCode;
  },

  checkComplexity: async (code: string, language: string): Promise<string> => {
    const response = await apiClient.post('/playground/complexity', { 
      code,
      language 
    });
    return response.data.data.modifiedCode;
  },

  getHistory: async (): Promise<PlaygroundResult[]> => {
    const response = await apiClient.get('/playground/history');
    return response.data.data.history;
  }
};

export default playgroundService;