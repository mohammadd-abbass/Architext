import { prisma } from '../../config/db.js';

export const createUser = async (data: { 
  name: string; 
  email: string; 
  password: string 
}) => {
  return prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    }
  });
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ 
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true, 
      createdAt: true
    }
  });
};
