import { type HttpHeader, type HttpMethod } from '@komore/http';

/**
 * HTTP server request
 */
export interface HttpServerRequest {
  /**
   * HTTP headers
   */
  readonly headers: ReadonlyArray<HttpHeader>;
  /**
   * HTTP request method
   */
  readonly method: HttpMethod;
  /**
   * URL
   */
  readonly url: URL;
}
