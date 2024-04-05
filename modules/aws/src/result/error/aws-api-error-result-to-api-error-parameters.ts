import { type HttpClientResponse } from '@komore/http/client';

import { type AwsApiErrorResult } from './aws-api-error-result';

/**
 * AWS API error result to API error parameters
 */
export interface AwsApiErrorResultToApiErrorParameters {
  /**
   * API error result
   */
  readonly apiErrorResult: AwsApiErrorResult;
  /**
   * HTTP client response
   */
  readonly httpClientResponse: HttpClientResponse;
}
