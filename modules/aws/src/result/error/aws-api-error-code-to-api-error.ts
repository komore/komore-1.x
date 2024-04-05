import { type ErrorFromType } from '@komore/error';
import { asUrlString } from '@komore/url';

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
  const { method, operation, url: operationUrl } = options;
  const url = asUrlString(operationUrl.toString());

  return ({ apiErrorResult: { Code: code }, httpClientResponse: { status: statusCode } }) => {
    switch (code) {
      case 'AccessDenied':
        return awsApiError.accessDenied({ operation });
      case 'AuthorizationHeaderMalformed':
        return awsApiError.malformedAuthorizationHeader({ operation });
      case 'IncompleteSignature':
        return awsApiError.invalidSignature({ operation, reason: 'incomplete' });
      case 'MethodNotAllowed':
        return awsApiError.notAllowed({ method, operation, url });
      case 'MissingAuthenticationToken':
        return awsApiError.missingAuthenticationToken({ operation });
      case 'SignatureDoesNotMatch':
        return awsApiError.invalidSignature({ operation, reason: 'mismatch' });
      default:
        break;
    }

    return awsApiError.unhandledErrorCode({ code: code ?? '<no code>', operation, statusCode });
  };
}
