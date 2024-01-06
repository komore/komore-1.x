import { type httpMethods } from './http-methods';

/**
 * HTTP method
 */
export type HttpMethod = (typeof httpMethods)[number];
