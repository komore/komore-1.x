import { type Observable } from '@komore/reactive';

import { type HttpClient } from '../http-client';
import { type HttpClientRequest } from '../request/http-client-request';
import { type HttpClientResponse } from './http-client-response';

/**
 * Creates a function that returns an HTTP client response, given an URL
 *
 * @param httpClient HTTP client
 * @param httpClientRequest HTTP client request, without the URL
 * @returns Function that returns an HTTP client response, given an URL
 */
export function urlToHttpClientResponse(
  httpClient: HttpClient,
  httpClientRequest?: Omit<HttpClientRequest, 'url'>
): (url: URL) => Observable<HttpClientResponse> {
  const defaultOptions = httpClientRequest ?? {};
  return url => httpClient({ ...defaultOptions, url });
}
