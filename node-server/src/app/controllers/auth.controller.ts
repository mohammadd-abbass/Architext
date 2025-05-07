import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { successResponse, errorResponse } from '../traits/response.trait';

export const signupHandler = async (req: Request, res: Response) => {
    try {
        const user = await authService.signup(req.body);
        successResponse(res, 'User created successfully', user, 201);
    } catch (err: any) {
        errorResponse(res, err.message, 400);
    }
};

export const loginHandler = async (req: Request, res: Response) => {
    try {
        const { token, user } = await authService.login(req.body);
        successResponse(res, 'Login successful', { user, token });
    } catch (err: any) {
        errorResponse(res, err.message, 401);
    }
};