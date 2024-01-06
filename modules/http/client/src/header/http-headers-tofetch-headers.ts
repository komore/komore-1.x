import { type HttpHeader } from '@komore/http';

/**
 * Reduces HTTP headers to a fetch Headers
 *
 * @param headers fetch Headers
 * @param httpHeader HTTP header
 * @returns fetch Headers
 * @private
 */
export function httpHeadersToFetchHeaders(headers: Headers, httpHeader: HttpHeader): Headers {
  const [headerName, headerValue] = httpHeader;
  headers.append(headerName, headerValue);
  return headers;
}
