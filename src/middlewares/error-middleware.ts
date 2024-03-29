import { Request, Response } from 'express';
import CustomError from '../utils/custom-error.js';

const errorHandler = (err: Error, req: Request, res: Response) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: message,
    },
  });
};

export default errorHandler;
