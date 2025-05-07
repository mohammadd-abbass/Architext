import passportJwt from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
import passport from 'passport';

const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const prisma = new PrismaClient();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secret123',
};

passport.use(new JWTStrategy(options, async (payload, done) => {
  const user = await prisma.user.findUnique({ where: { id: payload.id } });
  if (user) return done(null, user);
  return done(null, false);
}));

export default passport;
