import { type HttpMethod } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';

/**
 * AWS HTTP client response to result options
 */
export interface AwsHttpClientResponseToResultOptions {
  /**
   * HTTP method
   */
  readonly method: HttpMethod;
  /**
   * Operation
   */
  readonly operation: string;
  /**
   * Optional XML response handler
   */
  readonly toXml?: <T>(httpClientResponse: HttpClientResponse) => Observable<T>;
  /**
   * URL
   */
  readonly url: URL;
}
