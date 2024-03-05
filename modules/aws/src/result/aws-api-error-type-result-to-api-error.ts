import { type ErrorFromType } from '@komore/error';
import { stringToMatchesWith } from '@komore/string';

import { awsApiError } from '../aws-api.error';
import { type AwsApiErrorTypeResult } from './aws-api-error-type-result';

export function awsApiErrorTypeResultToApiError(
  operation: string
): (apiErrorResult: AwsApiErrorTypeResult) => ErrorFromType<typeof awsApiError> {
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
