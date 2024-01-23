import { validateHttpHeaderName, type HttpHeader } from '@komore/http';

/**
 * Returns a HTTP header, given a fetch header
 *
 * @param fetchHeader fetch header
 * @returns HTTP header
 * @private
 */
export function fetchHeaderToHttpHeader(fetchHeader: readonly [headerName: string, headerValue: string]): HttpHeader {
  const [headerName, headerValue] = fetchHeader;
  validateHttpHeaderName(headerName);
  return [headerName, headerValue];
}
