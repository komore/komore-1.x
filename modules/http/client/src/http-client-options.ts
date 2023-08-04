import { type Logger } from '@komore/logging';

import { type HttpClientRequestOptions } from './request/http-client-request-options';

/**
 * HTTP client options
 */
export interface HttpClientOptions {
  /**
   * Default request options
   */
  readonly defaultOptions?: HttpClientRequestOptions;
  /**
   * Driver
   */
  readonly driver?: typeof fetch;
  /**
   * Logger
   */
  readonly logger: Logger;
}
