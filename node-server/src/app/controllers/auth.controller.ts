import { Request, Response } from 'express';
import * as authService from '../services/auth.service.js';
import { successResponse, errorResponse } from '../traits/response.trait.js';
import jwt from 'jsonwebtoken';
import { createLog } from '../services/log.service.js';
import passport from 'passport';

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

export const githubAuthHandler = async (req: Request, res: Response) => {
  passport.authenticate('github', { session: false }, (err: Error, user: { id: string; email: string }) => {
    if (err || !user) {
      return errorResponse(res, 'GitHub authentication failed', 401);
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'supersecret', {
      expiresIn: '1d'
    });

    res.redirect(`${process.env.CLIENT_URL}/auth/callback?token=${token}`);
  })(req, res);
};

export const initiateGitHubAuth = (req: Request, res: Response) => {
  passport.authenticate('github')(req, res);
};

