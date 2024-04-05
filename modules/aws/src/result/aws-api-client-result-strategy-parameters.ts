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
   * Operation
   */
  readonly operation: string;
}
