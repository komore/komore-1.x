import { type ErrorFromType } from '@komore/error';

import { awsApiError } from '../../aws-api.error';
import { type AwsApiErrorResultToApiErrorOptions } from './aws-api-error-result-to-api-error-options';
import { type AwsApiErrorResultToApiErrorParameters } from './aws-api-error-result-to-api-error-parameters';

/**
 * Creates a function that returns an AWS API error, given an API error code
 *
 * @param options Options
 * @returns Function that returns an AWS API error, given an API error code
 * @private
 */
export function awsApiErrorCodeToApiError(
  options: AwsApiErrorResultToApiErrorOptions
): (parameters: AwsApiErrorResultToApiErrorParameters) => ErrorFromType<typeof awsApiError> {
  const { operation } = options;
  return ({ apiErrorResult: { Code: code = '' }, httpClientResponse: { status: statusCode } }) => {
    switch (code) {
      case 'MissingAuthenticationToken':
        return awsApiError.missingAuthenticationToken({ operation });
      case 'SignatureDoesNotMatch':
        // TODO: more specific error
        return awsApiError.invalidSignature({ operation });
      default:
        break;
    }

    return awsApiError.unhandledErrorCode({ code, operation, statusCode });
  };
}
