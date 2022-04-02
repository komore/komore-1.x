import { type HttpClientRequestOptions } from './http-client-request-options';

/**
 * Http client request
 * @template ContextType Context type
 */
export interface HttpClientRequest<ContextType = undefined> {
  /**
   * Options
   */
  readonly options?: HttpClientRequestOptions<ContextType>;
  /**
   * URL
   */
  readonly url: string;
}
