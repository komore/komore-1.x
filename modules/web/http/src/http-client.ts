import type { Observable } from '@komore/reactive';

/**
 * HTTP client
 * @template ContextType Contextual information type
 */
export interface HttpClient<ContextType = never> {
  /**
   * Submits a request
   * @param input Input URL or request
   * @param context Contextual information
   * @returns Observable response
   */
  (input: string | URL | Request, context?: ContextType): Observable<Response>;
}
