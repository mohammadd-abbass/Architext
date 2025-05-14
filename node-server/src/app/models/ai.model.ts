import { prisma } from '../../config/db.js';

export const createArchitectureSession = async (userId: number) => {
  return prisma.architectureSession.create({
    data: {
      userId,
      status: 'in_progress',
    },
  });
};

export const createArchitectureMessage = async (
  sessionId: string,
  role: string,
  content: string
) => {
  return prisma.architectureMessage.create({
    data: {
      sessionId,
      role,
      content,
    },
  });
};

