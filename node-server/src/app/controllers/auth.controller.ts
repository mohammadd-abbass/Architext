import { Request, Response } from 'express';
import * as authService from '../services/auth.service.js';
import { successResponse, errorResponse } from '../traits/response.trait.js';
import jwt from 'jsonwebtoken';
import { createLog } from '../services/log.service.js';

export const signupHandler = async (req: Request, res: Response) => {
    try {
      const user = await authService.signup(req.body);

      await createLog(user.user.id, req.ip || 'unknown', req.headers["user-agent"]);

      successResponse(res, 'User created successfully', user, 201);
    } catch (err: any) {
        errorResponse(res, err.message, 400);
    }
};

export const loginHandler = async (req: Request, res: Response) => {
    try {
        const { token, user } = await authService.login(req.body);

        await createLog(user.id, req.ip || 'unknown', req.headers["user-agent"]);

        successResponse(res, 'Login successful', { user, token });
    } catch (err: any) {
        errorResponse(res, err.message, 401);
      }
};

export const validateTokenHandler = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      errorResponse(res, 'Token missing', 401);
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret');
    
    successResponse(res, 'Token is valid', decoded);
  } catch (err: any) {
    errorResponse(res, 'Invalid or expired token', 401);
  }
};

