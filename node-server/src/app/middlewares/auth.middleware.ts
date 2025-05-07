import passport from '../../providers/passport.provider';
import { Request, Response, NextFunction } from 'express';

export const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: any, info: any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    req.user = user; 
    next();
  })(req, res, next); 
};
