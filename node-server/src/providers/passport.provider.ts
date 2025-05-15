import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as GitHubStrategy, Profile as GitHubProfile } from 'passport-github2';
import { prisma } from '../config/db.js';
import { findOrCreateGitHubUser } from '../app/models/user.model.js';

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

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  callbackURL: process.env.GITHUB_CALLBACK_URL!,
  scope: ['user:email'],
}, async (_accessToken: any, _refreshToken: any, profile: GitHubProfile, done: (error: any, user?: any) => void) => {
  try {
    const user = await findOrCreateGitHubUser(profile);
    done(null, user);
  } catch (error) {
    done(error);
  }
}));

export default passport;