export type ErrorType = 'RangeError' | 'HttpError' | 'ValidationError';

export interface AppError extends Error {
  type: ErrorType;
}

export function createAppError(message: string, type: ErrorType): AppError {
  return { name: 'AppError', message, type } as AppError;
}

export const RangeError = (message: string) => createAppError(message, 'RangeError');
export const HttpError = (message: string) => createAppError(message, 'HttpError');
export const ValidationError = (message: string) => createAppError(message, 'ValidationError');
