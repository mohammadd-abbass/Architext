import axios from 'axios';
import {
  createArchitectureSession,
  createArchitectureMessage,
  updateSessionStatus,
} from '../models/ai.model.js';

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

export const generateConfig = async (userId: number, config: any) => {
  const session = await createArchitectureSession(userId);

  try {
    // Save user message
    await createArchitectureMessage(session.id, 'user', JSON.stringify(config));

    // Call Flask API
    const response = await axios.post(`${FLASK_API_URL}/ai/generateConfig`, { config });
    const result = response.data.result;

    // Save assistant message
    await createArchitectureMessage(session.id, 'assistant', JSON.stringify(result));

    // Update session status
    await updateSessionStatus(session.id, 'completed', result);

    return result;
  } catch (error) {
    await updateSessionStatus(session.id, 'failed');
    if (error instanceof Error) {
      throw new Error('Failed to generate config: ' + error.message);
    } else {
      throw new Error('Failed to generate config: Unknown error');
    }
  }
};