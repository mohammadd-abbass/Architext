import { prisma } from '../../config/db.js';
import type { ApiType } from '../../generated/prisma/client/index.js';

export const createPlaygroundRecord = async (
  userId: number,
  type: ApiType,
  code: string,
  result: any
) => {
  return prisma.playgroundRecord.create({
    data: {
      userId,
      type,
      code,
      result,
    },
    select: {
      id: true,
      type: true,
      createdAt: true
    }
  });
};

export const getPlaygroundHistory = async (userId: number, limit = 20) => {
  return prisma.playgroundRecord.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: limit,
    select: {
      id: true,
      type: true,
      createdAt: true,
      code: true
    }
  });
};

export const getRecordById = async (recordId: string) => {
  return prisma.playgroundRecord.findUnique({
    where: { id: recordId },
    select: {
      id: true,
      type: true,
      code: true,
      result: true,
      createdAt: true
    }
  });
};

export const deletePlaygroundRecord = async (recordId: string) => {
  return prisma.playgroundRecord.delete({
    where: { id: recordId }
  });
};