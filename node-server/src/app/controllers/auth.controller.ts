import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const signupHandler = async (req: Request, res: Response) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({ message: 'User created', user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { token, user } = await authService.login(req.body);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};
