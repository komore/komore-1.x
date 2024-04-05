import { type HttpMethod } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';

/**
 * AWS API client result strategy parameters
 */
export interface AwsApiClientResultStrategyParameters {
  /**
   * HTTP client response
   */
  readonly httpClientResponse: HttpClientResponse;
  /**
   * HTTP method
   */
  readonly method: HttpMethod;
  /**
   * Operation
   */
  readonly operation: string;
  /**
   * URL
   */
  readonly url: URL;
}
