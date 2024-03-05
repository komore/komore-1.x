import { type ErrorFromType } from '@komore/error';
import { httpStatuses } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';
import { stringToMatchesWith } from '@komore/string';

import { awsApiError } from '../aws-api.error';
import { type AwsApiErrorMessageResult } from './aws-api-error-message-result';

export function awsApiErrorMessageResultToApiError(
  operation: string
): (apiErrorResult: AwsApiErrorMessageResult, response: HttpClientResponse) => ErrorFromType<typeof awsApiError> {
  return ({ Message: message }, response) => {
    const { status: statusCode } = response;
    switch (statusCode) {
      case httpStatuses.Forbidden:
        console.log('hmpf');
        type Matches = readonly [matches: string, user: string, permission: string];
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
