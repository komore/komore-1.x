import { type ErrorFromType } from '@komore/error';
import { type HttpClientResponse } from '@komore/http/client';

import { type awsApiError } from '../aws-api.error';
import { type AwsApiErrorResult } from './aws-api-error-result';
import { awsApiErrorTypeResultToApiError } from './aws-api-error-type-result-to-api-error';
import { awsApiErrorMessageResultToApiError } from './aws-api-error-message-result-to-api-error';

/**
 * Returns an API error, given an AWS API error result
 *
 * @param apiError AWS API error result
 * @returns API error
 * @private
 */
export function awsApiErrorResultToApiError(
  operation: string
): (apiErrorResult: AwsApiErrorResult, response: HttpClientResponse) => ErrorFromType<typeof awsApiError> {
  const messageResultToError = awsApiErrorMessageResultToApiError(operation);
  const typeResultToError = awsApiErrorTypeResultToApiError(operation);
  return (apiErrorResult, response) =>
    '__type' in apiErrorResult ? typeResultToError(apiErrorResult) : messageResultToError(apiErrorResult, response);
}
