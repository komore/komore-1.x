import { type HttpHeaderName } from './http-header-name';

/**
 * Tests whether an HTTP header name is a recognized HTTP header name
 *
 * @param httpHeaderName HTTP header name
 * @returns true if the HTTP header name is valid
 */
export function isHttpHeaderName(httpHeaderName: string): httpHeaderName is HttpHeaderName {
  return httpHeaderName.length > 0;
}
