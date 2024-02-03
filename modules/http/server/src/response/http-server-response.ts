import { type ReadStream } from 'node:fs';

import { type HttpHeader } from '@komore/http';

/**
 * HTTP server response
 */
export interface HttpServerResponse {
  /**
   * Body
   */
  readonly body?: string;
  /**
   * File stream
   */
  readonly fileStream$?: Observable<ReadStream>;
  /**
   * HTTP headers
   */
  readonly headers: ReadonlyArray<HttpHeader>;
  /**
   * Status code
   */
  readonly statusCode: number;
}
