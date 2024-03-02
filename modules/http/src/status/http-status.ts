import { type httpStatuses } from './http-statuses';

/**
 * HTTP status
 */
export type HttpStatus = (typeof httpStatuses)[keyof typeof httpStatuses] | (number & {});
