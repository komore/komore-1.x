import { httpStatuses } from '@komore/http';
import { httpClientResponseStatusIs, httpClientResponseToJson, type HttpClientResponse } from '@komore/http/client';
import { map } from '@komore/reactive';

import { awsApiError } from '../aws-api.error';
import { awsApiErrorResultToApiError } from './aws-api-error-result-to-api-error';
import { isAwsApiErrorResult } from './is-aws-api-error-result';

/**
 *
 * @param operation
 * @returns
 * @private
 */
export function awsHttpClientResponseToJsonResult<T>(
  operation: string
): (httpClientResponse: HttpClientResponse) => Observable<T> {
  const isFailureResponse = httpClientResponseStatusIs({ minimum: httpStatuses.BadRequest });
  const toApiError = awsApiErrorResultToApiError(operation);
  const toJson = httpClientResponseToJson<T>();

  return response =>
    toJson(response).pipe(
      map(result => {
        if (isFailureResponse(response)) {
          if (isAwsApiErrorResult(result)) {
            const error = toApiError(result);
            throw error;
          } else {
            throw awsApiError.unhandledJsonError({ json: result, operation });
          }
        }

        return result;
      })
    );
}
