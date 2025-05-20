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
    const code = req.body.code;
    const language = req.body.language

    console.log(typeof code)

    if (!code) {
      errorResponse(res, 'No code provided', 400);
      return;
    }

    const result = await playgroundService.commentCode(user.id, code, language);
    successResponse(res, 'Code commented successfully', { result });
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
    const code = req.body.code;
    const language = req.body.language

    if (!code) {
      errorResponse(res, 'No code provided', 400);
      return;
    }

    const complexity = await playgroundService.checkComplexity(user.id, code, language);
    successResponse(res, 'Complexity checked successfully', { complexity });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};

export const getHistoryHandler = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      errorResponse(res, 'Unauthorized - No user found', 401);
      return;
    }

    const user = req.user as AuthUser;
    const history = await playgroundService.getHistory(user.id);
    successResponse(res, 'History retrieved successfully', { history });
  } catch (err: any) {
    errorResponse(res, err.message, 500);
  }
};