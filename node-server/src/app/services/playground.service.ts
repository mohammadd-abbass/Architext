import axios from 'axios';
import {
  createPlaygroundRecord,
  getPlaygroundHistory,
} from '../models/playground.model.js';
import type { AnalysisResult, CodeComment, ComplexityResult } from '../../types/playground.js';

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000/ai';

export const analyzeCode = async (userId: number, code: string) => {
  try {
    const response = await axios.post<{ result: AnalysisResult }>(
      `${FLASK_API_URL}/analyze`,
      { code }
    );
    
    await createPlaygroundRecord(userId, 'ANALYZE', code, response.data.result);
    return response.data.result;
  } catch (error) {
    await createPlaygroundRecord(userId, 'ANALYZE', code, { error: 'Analysis failed' });
    throw new Error('Code analysis failed');
  }
};

