import { User as PrismaUser } from '../generated/prisma/client/index.js';

declare global {
  namespace Express {
    interface User extends Pick<PrismaUser, 'id' | 'email' | 'name'> {}
  }
}

export {};
