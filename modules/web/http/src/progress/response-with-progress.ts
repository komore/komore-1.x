import { type ResponseProgress } from './response-progress';

/**
 * Response with progress
 */
export type ResponseWithProgress = readonly [response: Response, responseProgress: ResponseProgress];
