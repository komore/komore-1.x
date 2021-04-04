import type { Observable } from '@komore/reactive';

/**
 * HTTP client
 */
export interface HttpClient {
  /**
   * Submits a request
   * @param input Input URL or request
   * @returns Observable response
   */
  (input: string | URL | Request): Observable<Response>;

  /**
   * Submits a request
   * @param input Input URL or request
   * @param context Contextual information
   * @returns Observable response
   */
  <T>(input: string | URL | Request, context: T): Observable<Response>;
}
