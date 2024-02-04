import { type HttpHeader } from '@komore/http';

import { type HttpClient } from '../http-client';
import { httpClientWithInterceptor } from './http-client-with-interceptor';

/**
 * Creates a function that returns an HTTP client with HTTP headers added to all requests, given an HTTP client
 *
 * @param httpHeaders HTTP headers
 * @returns Function that returns an HTTP client with HTTP headers added to all requests, given an HTTP client
 */
export function httpClientWithHttpHeaders(
  httpHeaders: ReadonlyArray<HttpHeader>
): (httpClient: HttpClient) => HttpClient {
  return httpClientWithInterceptor({
    request: request => ({
      ...request,
      headers: [...httpHeaders, ...(request.headers ?? [])],
    }),
  });
}
