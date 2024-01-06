import { type HttpHeaderName } from './http-header-name';
import { httpHeaderNames } from './http-header-names';

/**
 * Tests whether an HTTP header name is a recognized HTTP header name
 *
 * @param httpHeaderName HTTP header name
 * @returns true if the HTTP header name is valid
 */
export function isHttpHeaderName(httpHeaderName: string): httpHeaderName is HttpHeaderName {
  return set.has(httpHeaderName);
}

const set: ReadonlySet<string> = new Set(httpHeaderNames);
