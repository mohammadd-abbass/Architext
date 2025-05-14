import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { prisma } from '../config/db.js';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secret123',
};

passport.use(new JWTStrategy(options, async (payload, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, email: true, name: true } 
    });
    return user ? done(null, user) : done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

export default passport;