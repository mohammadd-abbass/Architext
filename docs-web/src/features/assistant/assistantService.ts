import apiClient from "../../services/axios";

export interface GenerateConfigResponse {
  result: string;
}

const assistantService = {
  generateConfig: async (config: string): Promise<GenerateConfigResponse> => {
    const response = await apiClient.post('/api/ai/generate-config', { config });
    return response.data.data;
  },
};

export default assistantService;