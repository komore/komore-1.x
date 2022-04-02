import { type Observable } from '@komore/reactive';
import { type JsonHttpClientRequestOptions } from './json-http-client-request-options';

/**
 * JSON HTTP client
 * @template DefaultContextType Default contextual information type
 */
export interface JsonHttpClient<DefaultContextType = undefined> {
  /**
   * Submits a request
   * @param url URL
   * @param requestOptions Request options
   * @returns Observable response
   */
  <T, ContextType = DefaultContextType>(
    url: string | URL,
    requestOptions?: JsonHttpClientRequestOptions<T, ContextType>
  ): Observable<T>;
}
