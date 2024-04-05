import { type ErrorFromType } from '@komore/error';
import { stringToMatchesWith } from '@komore/string';

import { awsApiError } from '../../aws-api.error';
import { type AwsApiJsonErrorTypeResult } from './aws-api-json-error-type-result';

/**
 * Creates a function that returns an API error, given a JSON error type result
 *
 * @param operation Operation
 * @returns Function that returns an API error, given a JSON error type result
 * @private
 */
export function awsApiJsonErrorTypeResultToApiError(
  operation: string
): (apiErrorResult: AwsApiJsonErrorTypeResult) => ErrorFromType<typeof awsApiError> {
  type Matches = readonly [matched: string, service: string, exceptionName: string];
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
