import { httpStatuses } from '@komore/http';
import { httpClientResponseStatusIs, httpClientResponseToArrayBuffer } from '@komore/http/client';
import { map, mergeMap } from '@komore/reactive';
import { xmlToValue } from '@komore/xml';

import { type AwsApiClientResultStrategy } from '../aws-api-client-result-strategy';
import { createAwsApiClientResultStrategy } from '../create-aws-http-client-result-strategy';
import { type AwsApiClientXmlResultStrategyOptions } from './aws-api-client-xml-result-strategy-options';
import { isAwsApiXmlErrorResult } from './is-aws-api-xml-error-result';
import { awsApiErrorResultToApiError } from '../error/aws-api-error-result-to-api-error';
import { awsApiError } from '../../aws-api.error';

/**
 * Creates an AWS API client XML result strategy
 *
 * @param strategyOptions XML result strategy options
 * @returns AWS API client XML result strategy
 */
export function awsApiClientXmlResultStrategy(
  strategyOptions: AwsApiClientXmlResultStrategyOptions
): AwsApiClientResultStrategy {
  const { xmlParser } = strategyOptions;
  const isFailureResponse = httpClientResponseStatusIs({ minimum: httpStatuses.BadRequest });
  const toArrayBuffer = httpClientResponseToArrayBuffer();
  const toXml = xmlToValue({ xmlParser });

  return createAwsApiClientResultStrategy(['application/xml', 'text/xml'])(
    ({ httpClientResponse, method, operation, url }) =>
      toArrayBuffer(httpClientResponse).pipe(
        mergeMap(arrayBuffer =>
          toXml(arrayBuffer).pipe(
            map(result => {
              if (isFailureResponse(httpClientResponse)) {
                if (isAwsApiXmlErrorResult(result)) {
                  const { Error: apiErrorResult } = result.ErrorResponse;
                  throw awsApiErrorResultToApiError({ method, operation, url })({ apiErrorResult, httpClientResponse });
                } else {
                  throw awsApiError.unhandledXmlError({ xml: result, operation });
                }
              }

              return {
                result,
              };
            })
          )
        )
      )
  );
}
