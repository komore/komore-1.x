import { type Observable } from '@komore/reactive';
import { type HttpClientRequestOptions } from './http-client-request-options';

/**
 * HTTP client
 * @template DefaultContextType Default contextual information type
 */
export interface HttpClient<DefaultContextType = undefined> {
  /**
   * Submits a request
   * @param url URL
   * @param requestOptions Request options
   * @returns Observable response
   */
  <ContextType = DefaultContextType>(
    url: string | URL,
    requestOptions?: HttpClientRequestOptions<ContextType>
  ): Observable<Response>;
}
