import { type httpHeaderNames } from './http-header-names';

/**
 * HTTP header name
 */
export type HttpHeaderName = (typeof httpHeaderNames)[number];
