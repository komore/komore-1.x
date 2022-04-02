import { type HttpClientRequestOptions } from '../http-client-request-options';

/**
 * JSON HTTP client request options
 */
export type JsonHttpClientRequestOptions<T, ContextType> = HttpClientRequestOptions<ContextType> & {
  readonly validator?: (json: unknown) => T;
};
