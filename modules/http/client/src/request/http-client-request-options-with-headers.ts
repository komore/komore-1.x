import { normalizeHttpClientHeaders } from '../header/normalize-http-client-headers';
import { type HttpClientRequestOptions } from './http-client-request-options';

/**
 * Returns HTTP request options with additional headers
 *
 * @param options HTTP request options
 * @param additionalHeaders Additional headers
 * @returns HTTP request option with the additional headers
 */
export function httpClientRequestOptionsWithHeaders(
  options: HttpClientRequestOptions,
  ...additionalHeaders: ReadonlyArray<HeadersInit | undefined>
): HttpClientRequestOptions {
  const { headers, ...otherProperties } = options;
  return {
    ...otherProperties,
    headers: normalizeHttpClientHeaders(headers, ...additionalHeaders),
  };
}
