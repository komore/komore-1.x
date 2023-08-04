import { type Observable } from 'rxjs';

import { type HttpClientRequest } from './request/http-client-request';

/**
 * HTTP client
 *
 * @deprecated Use HttpClient from @komore/http/client
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
