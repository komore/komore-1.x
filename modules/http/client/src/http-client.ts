import { type Observable } from '@komore/reactive';

import { type HttpClientRequest } from './request/http-client-request';
import { type HttpClientResponse } from './response/http-client-response';

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
  (request: HttpClientRequest): Observable<HttpClientResponse>;
}
