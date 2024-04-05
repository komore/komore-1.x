import { httpStatuses } from '@komore/http';
import { httpClientResponseToJson, httpClientResponseStatusIs } from '@komore/http/client';
import { map } from '@komore/reactive';

import { awsApiError } from '../../aws-api.error';
import { type AwsApiClientResultStrategy } from '../aws-api-client-result-strategy';
import { createAwsApiClientResultStrategy } from '../create-aws-http-client-result-strategy';
import { type AwsApiClientJsonResultStrategyOptions } from './aws-api-client-json-result-strategy-options';
import { awsApiJsonErrorResultToApiError } from './aws-api-json-error-result-to-api-error';
import { isAwsApiJsonErrorResult } from './is-aws-api-json-error-result';

/**
 * Creates an AWS API client JSON result strategy
 *
 * @param strategyOptions JSON result strategy options
 * @returns AWS API client JSON result strategy
 */
export function awsApiClientJsonResultStrategy(
  _strategyOptions: AwsApiClientJsonResultStrategyOptions
): AwsApiClientResultStrategy {
  const isFailureResponse = httpClientResponseStatusIs({ minimum: httpStatuses.BadRequest });
  const toJson = httpClientResponseToJson();

  return createAwsApiClientResultStrategy([
    'application/json',
    'application/x-amz-json-1.0',
    'application/x-amz-json-1.1',
  ])(({ httpClientResponse, operation }) =>
    toJson(httpClientResponse).pipe(
      map(result => {
        if (isFailureResponse(httpClientResponse)) {
          throw isAwsApiJsonErrorResult(result)
            ? awsApiJsonErrorResultToApiError({ operation })({ apiJsonErrorResult: result, httpClientResponse })
            : awsApiError.unhandledJsonError({ json: result, operation });
        }

        return {
          result,
        };
      })
    )
  );
}
