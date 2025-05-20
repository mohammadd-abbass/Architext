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

