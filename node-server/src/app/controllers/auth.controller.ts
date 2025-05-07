import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { registerUser, validateUser } from '../services/auth.service';

const JWT_SECRET = process.env.JWT_SECRET || 'topSecret';

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await registerUser(email, password);
    res.status(201).json({ message: 'User created', user: { id: user.id, email: user.email } });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await validateUser(email, password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  if (!JWT_SECRET) {
    return res.status(500).json({ error: 'JWT secret is not configured' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
