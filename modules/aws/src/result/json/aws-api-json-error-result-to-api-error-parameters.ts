import { type HttpClientResponse } from '@komore/http/client';

import { type AwsApiJsonErrorResult } from './aws-api-json-error-result';

/**
 * AWS API error result to API error parameters
 */
export interface AwsApiJsonErrorResultToApiErrorParameters {
  /**
   * API JSON error result
   */
  readonly apiJsonErrorResult: AwsApiJsonErrorResult;
  /**
   * HTTP client response
   */
  readonly httpClientResponse: HttpClientResponse;
}
