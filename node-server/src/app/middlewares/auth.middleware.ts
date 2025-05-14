import { Request, Response, NextFunction } from 'express';
import passport from '../../providers/passport.provider';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name
    };
    next();
  })(req, res, next);
};