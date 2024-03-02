import { type ErrorFromType } from '@komore/error';
import { stringToMatchesWith } from '@komore/string';

import { awsApiError } from '../aws-api.error';
import { type AwsApiErrorResult } from './aws-api-error-result';

/**
 * Returns an API error, given an AWS API error result
 *
 * @param apiError AWS API error result
 * @returns API error
 * @private
 */
export function awsApiErrorResultToApiError(
  operation: string
): (apiError: AwsApiErrorResult) => ErrorFromType<typeof awsApiError> {
  type Matches = readonly [matches: string, service: string, exceptionName: string];
  const toMatches = stringToMatchesWith<Matches>(/^([^#]+)#(.+)$/);
  return ({ __type: type }) => {
    const matches = toMatches(type);
    if (matches === undefined) {
      return awsApiError.unknownJsonErrorTypeFormat({ operation, type });
    }

    const [, service, exceptionName] = matches;
    if (service === 'com.amazon.coral.service') {
      switch (exceptionName) {
        case 'InvalidSignatureException':
          return awsApiError.invalidSignature({ operation });
        case 'MissingAuthenticationTokenException':
          return awsApiError.missingAuthenticationToken({ operation });
        case 'SerializationException':
          return awsApiError.serializationFailed({ operation });
        case 'UnknownOperationException':
          return awsApiError.unknownOperation({ operation });
      }
    }

    return awsApiError.operationFailed({ exceptionName, operation, service });
  };
}
