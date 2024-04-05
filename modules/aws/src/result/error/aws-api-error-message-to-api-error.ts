import { type ErrorFromType } from '@komore/error';
import { httpStatuses } from '@komore/http';
import { stringToMatchesWith } from '@komore/string';

import { awsApiError } from '../../aws-api.error';
import { type AwsApiErrorResultToApiErrorOptions } from './aws-api-error-result-to-api-error-options';
import { type AwsApiErrorResultToApiErrorParameters } from './aws-api-error-result-to-api-error-parameters';

/**
 * Creates a function that returns an AWS API error, given an API error message
 *
 * @param options Options
 * @returns Function that returns an AWS API error, given an API error message
 * @private
 */
export function awsApiErrorMessageToApiError(
  options: AwsApiErrorResultToApiErrorOptions
): (parameters: AwsApiErrorResultToApiErrorParameters) => ErrorFromType<typeof awsApiError> {
  const { operation } = options;
  return ({ apiErrorResult: { Message: message }, httpClientResponse: { status: statusCode } }) => {
    switch (statusCode) {
      case httpStatuses.Forbidden:
        console.log('hmpf');
        type Matches = readonly [matched: string, user: string, permission: string];
        const toMatches = stringToMatchesWith<Matches>(/^User: ([^\s]+).*the ([^\s]+) action$/);
        const matches = toMatches(message);
        if (matches !== undefined) {
          const [, user, permission] = matches;
          return awsApiError.forbiddenOperation({ operation, permission, user });
        }
        console.log('well no matches');
        break;
      default:
        break;
    }

    return awsApiError.unhandledError({ operation, statusCode, text: message });
  };
}
