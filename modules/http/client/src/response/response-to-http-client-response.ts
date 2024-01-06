import { fetchResponseSymbol } from './fetch-response-symbol';
import { type HttpClientResponse } from './http-client-response';

/**
 * Returns an HTTP client response, given a fetch response
 *
 * @param response fetch response
 * @returns HTTP client response
 */
export function responseToHttpClientResponse(response: Response): HttpClientResponse {
  const { status } = response;
  const headers = Array.from(response.headers.entries());
  return {
    headers,
    status,
    [fetchResponseSymbol]: response,
  };
}
