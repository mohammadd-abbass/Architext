import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { registerUser, validateUser } from '../services/auth.service';

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await registerUser(email, password);
    res.status(201).json({ message: 'User created', user: { id: user.id, email: user.email } });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

