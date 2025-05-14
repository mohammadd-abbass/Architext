import { prisma } from '../../config/db.js';

export const createArchitectureSession = async (userId: number) => {
  return prisma.architectureSession.create({
    data: {
      userId,
      status: 'in_progress',
    },
  });
};

