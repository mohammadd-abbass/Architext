import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../traits/response.trait.js';
import * as aiService from '../services/ai.service.js';

export const generateConfigHandler = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; 
    const config = req.body.config;

    if (!config) {
      errorResponse(res, 'No config provided', 400);
      return;
    }

    const result = await aiService.generateConfig(userId, config);
    successResponse(res, 'Config generated successfully', { result });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};