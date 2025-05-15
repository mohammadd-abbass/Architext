import { Request, Response } from 'express';

import { successResponse, errorResponse } from '../traits/response.trait.js';
import * as aiService from '../services/ai.service.js';

interface AuthUser {
  id: number;
  email: string;
  name: string;
}

export const generateConfigHandler = async (req: Request, res: Response) => {
  try {
    if(!req.user) {
      errorResponse(res, 'Unauthorized - No user found', 401);
      return;
    }

    const user = req.user as AuthUser;
    const userId = user.id;
    
    const config = req.body.config;
    
    if (!config) {
      errorResponse(res, 'No config provided', 400);
      return;
    }
    
    if (typeof userId !== 'number') {
      errorResponse(res, 'Unauthorized - Invalid user', 401);
      return;
    }

    const result = await aiService.generateConfig(userId, config);
    successResponse(res, 'Config generated successfully', { result });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};