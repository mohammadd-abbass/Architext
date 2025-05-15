import { prisma } from '../../config/db.js';

export const createLogEntry = async (log: {
  userId: number;
  ipAddress: string;
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  userAgent?: string;
}) => {
  return await prisma.log.create({
    data: log,
  });
};

