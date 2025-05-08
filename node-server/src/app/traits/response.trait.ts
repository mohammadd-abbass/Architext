import { Response } from 'express';

export const successResponse = (res: Response, message: string, data: any = {}, statusCode: number = 200) => {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
};

export const errorResponse = (res: Response, error: string, statusCode: number = 400) => {
    return res.status(statusCode).json({
      status: 'error',
      message: error,
    });
};