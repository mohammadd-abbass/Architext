import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data });
};


