import { Request, Response, NextFunction } from 'express';
import passport from '../../providers/passport.provider.js';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    
    req.user = user;
    console.log('Middleware User:', user);
    console.log('Middleware User ID Type:', typeof user.id);
    next();
  })(req, res, next);
};