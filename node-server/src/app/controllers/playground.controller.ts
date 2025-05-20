import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../traits/response.trait.js';
import * as playgroundService from '../services/playground.service.js';

interface AuthUser {
  id: number;
  email: string;
  name: string;
}

export const analyzeCodeHandler = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      errorResponse(res, 'Unauthorized - No user found', 401);
      return;
    }

    const user = req.user as AuthUser;
    const { code } = req.body;

    if (!code) {
      errorResponse(res, 'No code provided', 400);
      return;
    }

    const result = await playgroundService.analyzeCode(user.id, code);
    successResponse(res, 'Code analyzed successfully', { result });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};

export const commentCodeHandler = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      errorResponse(res, 'Unauthorized - No user found', 401);
      return;
    }

    const user = req.user as AuthUser;
    const { code } = req.body;

    if (!code) {
      errorResponse(res, 'No code provided', 400);
      return;
    }

    const comments = await playgroundService.commentCode(user.id, code);
    successResponse(res, 'Code commented successfully', { comments });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};

export const checkComplexityHandler = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      errorResponse(res, 'Unauthorized - No user found', 401);
      return;
    }

    const user = req.user as AuthUser;
    const { code } = req.body;

    if (!code) {
      errorResponse(res, 'No code provided', 400);
      return;
    }

    const complexity = await playgroundService.checkComplexity(user.id, code);
    successResponse(res, 'Complexity checked successfully', { complexity });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};

