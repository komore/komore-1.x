import { httpStatuses } from '@komore/http';
import { httpClientResponseToJson, type HttpClientResponse, httpClientResponseStatusIs } from '@komore/http/client';
import { map } from '@komore/reactive';

import { awsApiError } from '../../aws-api.error';
import { awsApiErrorResultToApiError } from '../../result/aws-api-error-result-to-api-error';
import { isAwsApiErrorResult } from '../../result/is-aws-api-error-result';
import { type AwsApiClientResultStrategy } from './aws-api-client-result-strategy';

/**
 * Creates an AWS API client JSON result strategy
 *
 * @returns AWS API client JSON result strategy
 */
export function awsApiClientJsonResultStrategy(): AwsApiClientResultStrategy {
  const isFailureResponse = httpClientResponseStatusIs({ minimum: httpStatuses.BadRequest });
  const toJson = httpClientResponseToJson();
  const mediaTypes = new Set(['application/json', 'application/x-amz-json-1.0', 'application/x-amz-json-1.1']);
  const type = 'result';

  return {
    httpClientResponseToResult: <T>(httpClientResponse: HttpClientResponse, operation: string) =>
      toJson(httpClientResponse).pipe(
        map(result => {
          if (isFailureResponse(httpClientResponse)) {
            if (isAwsApiErrorResult(result)) {
              throw awsApiErrorResultToApiError(operation)(result, httpClientResponse);
            } else {
              throw awsApiError.unhandledJsonError({ json: result, operation });
            }
          }

          return result as T;
        })
      ),
    mediaTypes,
    type,
  };
}
