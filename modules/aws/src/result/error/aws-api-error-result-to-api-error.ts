import { type ErrorFromType } from '@komore/error';

import { awsApiError } from '../../aws-api.error';
import { type AwsApiErrorResultToApiErrorOptions } from './aws-api-error-result-to-api-error-options';
import { type AwsApiErrorResultToApiErrorParameters } from './aws-api-error-result-to-api-error-parameters';
import { awsApiErrorCodeToApiError } from './aws-api-error-code-to-api-error';
import { awsApiErrorMessageToApiError } from './aws-api-error-message-to-api-error';

/**
 * Creates a function that returns an AWS API error, given an API error result
 *
 * @param options Options
 * @returns Function that returns an AWS API error, given an API error result
 * @private
 */
export function awsApiErrorResultToApiError(
  options: AwsApiErrorResultToApiErrorOptions
): (parameters: AwsApiErrorResultToApiErrorParameters) => ErrorFromType<typeof awsApiError> {
  const { operation } = options;
  const codeToApiError = awsApiErrorCodeToApiError(options);
  const messageToApiError = awsApiErrorMessageToApiError(options);
  return parameters => {
    const {
      apiErrorResult: { Code: code, Message: message },
      httpClientResponse: { status: statusCode },
    } = parameters;

    return code
      ? codeToApiError(parameters)
      : message
        ? messageToApiError(parameters)
        : awsApiError.unhandledError({ operation, statusCode, text: message });
  };
}
