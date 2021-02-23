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
   * @param responseType Blob response type
   * @returns Observable blob response
   */
  (input: string | URL | Request, responseType: 'blob'): Observable<Blob>;

  /**
   * Submits a request
   * @param input Input URL or request
   * @param responseType JSON response type
   * @returns Observable JSON response
   * @template T JSON type
   */
  <T>(input: string | URL | Request, responseType: 'json'): Observable<T>;

  /**
   * Submits a request
   * @param input Input URL or request
   * @param responseType Text response type
   * @returns Observable response
   */
  (input: string | URL | Request, responseType: 'response'): Observable<Response>;

  /**
   * Submits a request
   * @param input Input URL or request
   * @param responseType Text response type
   * @returns Observable text response
   */
  (input: string | URL | Request, responseType: 'text'): Observable<string>;
}
