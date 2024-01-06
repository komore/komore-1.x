import { type HttpHeader } from '@komore/http';
import { type Observable } from '@komore/reactive';

import { type HttpServerRequest } from './request/http-server-request';
import { type HttpServerResponse } from './response/http-server-response';

/**
 * HTTP server options
 */
export interface HttpServerOptions {
  /**
   * HTTP request handler
   *
   * @param request HTTP server request stream
   * @returns HTTP server response
   */
  readonly handler: (request: Observable<HttpServerRequest>) => Observable<HttpServerResponse>;
  /**
   * HTTP server header options
   */
  readonly headers?: {
    /**
     * Default HTTP server headers
     */
    readonly default?: ReadonlyArray<HttpHeader>;
  };
  /**
   * Host
   */
  readonly host: string;
  /**
   * Port
   */
  readonly port: string;
}
