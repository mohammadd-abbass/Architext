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

};

export default playgroundService;