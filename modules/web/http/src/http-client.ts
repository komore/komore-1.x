import { type Observable } from '@komore/reactive';
import { type HttpClientRequest } from './http-client-request';

/**
 * HTTP client
 * @template ContextType Contextual information type
 */
export interface HttpClient<ContextType = never> {
  /**
   * Submits a request
   * @param input Input URL or HTTP client request
   * @param context Contextual information
   * @returns Observable response
   */
  (input: string | URL | HttpClientRequest, context?: ContextType): Observable<Response>;
}
