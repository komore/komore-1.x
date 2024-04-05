import { type ErrorFromType } from '@komore/error';

import { type awsApiError } from '../../aws-api.error';
import { awsApiErrorResultToApiError } from '../error/aws-api-error-result-to-api-error';
import { awsApiJsonErrorTypeResultToApiError } from './aws-api-json-error-type-result-to-api-error';
import { type AwsApiJsonErrorResultToApiErrorOptions } from './aws-api-json-error-result-to-api-error-options';
import { type AwsApiJsonErrorResultToApiErrorParameters } from './aws-api-json-error-result-to-api-error-parameters';

/**
 * Creates a function that returns an AWS API error, given a JSON error result
 *
 * @param options Options
 * @returns Function that returns an AWS API error, given a JSON error result
 * @private
 */
export function awsApiJsonErrorResultToApiError(
  options: AwsApiJsonErrorResultToApiErrorOptions
): (parameters: AwsApiJsonErrorResultToApiErrorParameters) => ErrorFromType<typeof awsApiError> {
  const { method, operation, url } = options;
  const resultToError = awsApiErrorResultToApiError({ method, operation, url });
  const typeResultToError = awsApiJsonErrorTypeResultToApiError(operation);
  return ({ apiJsonErrorResult, httpClientResponse }) =>
    '__type' in apiJsonErrorResult
      ? typeResultToError(apiJsonErrorResult)
      : resultToError({ apiErrorResult: apiJsonErrorResult, httpClientResponse });
}
