import { type Observable } from 'rxjs';

import { type HttpClient } from '../http-client';
import { type HttpClientRequestOptions } from '../request/http-client-request-options';

/**
 * Creates a function that returns an HTTP client response, given an URL
 *
 * @param httpClient HTTP client
 * @param options HTTP client request options
 * @returns Function that returns an HTTP client response, given an URL
 * @deprecated Use urlToResponse from @komore/http/client
 */
export function urlToResponse(
  httpClient: HttpClient,
  options?: HttpClientRequestOptions
): (url: URL) => Observable<Response> {
  return url => httpClient({ url, ...(options !== undefined ? { options } : {}) });
}
