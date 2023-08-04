import { type ResponseProgress } from './response-progress';

/**
 * HTTP client response with progress
 */
export type ResponseWithProgress = readonly [response: Response, responseProgress: ResponseProgress];
