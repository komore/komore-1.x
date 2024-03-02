import { type HttpHeader, type HttpStatus } from '@komore/http';

import { type fetchResponseSymbol } from './fetch-response-symbol';

/**
 * HTTP client response
 */
export interface HttpClientResponse {
  /**
   * Headers
   */
  readonly headers: ReadonlyArray<HttpHeader>;
  /**
   * Status code
   */
  readonly status: HttpStatus;
  /**
   * fetch response
   *
   * @private
   */
  readonly [fetchResponseSymbol]: Response;
}
