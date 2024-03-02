import { type HttpHeader } from './http-header';
import { type HttpHeaderName } from './name/http-header-name';

/**
 * Creates a function that returns true when a HTTP header matches a given HTTP header name
 *
 * @param headerName HTTP header name
 * @returns Function that returns true when a HTTP header matches the given HTTP header name
 */
export function byHttpHeaderName(headerName: HttpHeaderName): (httpHeader: HttpHeader) => boolean {
  return ([name]) => name === headerName;
}
