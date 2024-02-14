import { type HttpHeader, type HttpMethod } from '@komore/http';

import { type HttpClientRequestOptions } from './http-client-request-options';

/**
 * HTTP client request
 */
export interface HttpClientRequest {
  /**
   * Headers
   */
  readonly headers?: ReadonlyArray<HttpHeader>;
  /**
   * Method
   *
   * @note Defaults to `GET`
   */
  readonly method?: HttpMethod;
  /**
   * Request options
   */
  readonly options?: Partial<HttpClientRequestOptions>;
  /**
   * URL
   */
  readonly url: URL;
}
