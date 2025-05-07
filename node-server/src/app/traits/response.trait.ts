import { Response } from 'express';

export const successResponse = (res: Response, message: string, data: any = {}, statusCode: number = 200) => {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
};