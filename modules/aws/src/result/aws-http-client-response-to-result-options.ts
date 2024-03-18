import { type HttpMethod } from '@komore/http';

import { type AwsApiClientResultStrategy } from '../strategy/result/aws-api-client-result-strategy';

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
   * Strategies
   */
  readonly strategies: ReadonlyArray<AwsApiClientResultStrategy>;
  /**
   * URL
   */
  readonly url: URL;
}
