import { type Observable } from '@komore/reactive';

import { type HttpClientRequest } from './request/http-client-request';

/**
 * HTTP client
 */
export interface HttpClient {
  /**
   * Executes an HTTP request
   *
   * @param request Request
   * @returns Observable response
   */
  (request: HttpClientRequest): Observable<Response>;
}
