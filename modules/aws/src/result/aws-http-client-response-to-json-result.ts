import { httpStatuses } from '@komore/http';
import { httpClientResponseStatusIs, httpClientResponseToJson, type HttpClientResponse } from '@komore/http/client';
import { map } from '@komore/reactive';

import { awsApiError } from '../aws-api.error';
import { awsApiErrorResultToApiError } from './aws-api-error-result-to-api-error';
import { type AwsHttpClientResponseToResultOptions } from './aws-http-client-response-to-result-options';
import { isAwsApiErrorResult } from './is-aws-api-error-result';

/**
 *
 * @param options Options
 * @returns
 * @private
 */
export function awsHttpClientResponseToJsonResult<T>(
  options: AwsHttpClientResponseToResultOptions
): (httpClientResponse: HttpClientResponse) => Observable<T> {
  const { operation } = options;
  const isFailureResponse = httpClientResponseStatusIs({ minimum: httpStatuses.BadRequest });
  const toApiError = awsApiErrorResultToApiError(operation);
  const toJson = httpClientResponseToJson<T>();

  return response =>
    toJson(response).pipe(
      map(result => {
        if (isFailureResponse(response)) {
          if (isAwsApiErrorResult(result)) {
            const error = toApiError(result, response);
            throw error;
          } else {
            throw awsApiError.unhandledJsonError({ json: result, operation });
          }
        }

        return result;
      })
    );
}
