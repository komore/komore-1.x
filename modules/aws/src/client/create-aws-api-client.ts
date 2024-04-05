import { valueToLog } from '@komore/logging';
import { mergeMap, tapNext } from '@komore/reactive';

import { awsLog } from '../aws.log';
import { awsApiClientOperationToHttpClientRequest } from '../operation/aws-api-client-operation-to-http-client-request';
import { awsHttpClientResponseToResult } from '../result/aws-http-client-response-to-result';
import { httpClientRequestWithAwsSignature } from '../signature/request/http-client-request-with-aws-signature';
import { type AwsApiClient } from './aws-api-client';
import { type AwsApiClientOptions } from './aws-api-client-options';
import { type AwsApiClientParameters } from './aws-api-client-parameters';
import { awsApiClientParametersToUrl } from './aws-api-client-parameters-to-url';

/**
 * Creates an AWS API client
 *
 * @param clientOptions AWS API client options
 * @returns AWS API client
 */
export function createAwsApiClient(clientOptions: AwsApiClientOptions): AwsApiClient {
  const {
    credentials,
    currentDateTime = () => Temporal.Now.zonedDateTimeISO('UTC').toPlainDateTime(),
    hashAlgorithm = 'SHA-256',
    httpClient,
    region: defaultRegion,
    service,
    strategies: {
      parameters: parametersStrategy,
      result: resultStrategies,
      signature: signatureStrategy,
      url: urlStrategy,
    },
  } = clientOptions;
  const algorithm = 'AWS4-HMAC-SHA256';
  const toUrl = awsApiClientParametersToUrl({ defaultRegion, service, urlStrategy });
  const toHttpClientRequest = awsApiClientOperationToHttpClientRequest({ hashAlgorithm, strategy: parametersStrategy });
  const withSignature = httpClientRequestWithAwsSignature({
    algorithm,
    credentials,
    hashAlgorithm,
    service,
    strategy: signatureStrategy,
  });

  return <T>(clientParameters: AwsApiClientParameters): Observable<T> => {
    const { method = 'POST', operation, parameters, region = defaultRegion } = clientParameters;
    const response = 'response' in clientParameters ? clientParameters.response : false;
    const dateTime = currentDateTime();
    const url = toUrl(clientParameters);
    const httpClientResponse$ = toHttpClientRequest({ dateTime, method, operation, parameters, url }).pipe(
      mergeMap(httpClientRequest => withSignature({ dateTime, httpClientRequest, region })),
      tapNext(valueToLog(({ headers = [] }) => awsLog.apiRequestSent({ headers, operation, service }))),
      mergeMap(httpClient),
      tapNext(valueToLog(({ headers, status }) => awsLog.apiResponseReceived({ headers, operation, service, status })))
    );

    return response
      ? (httpClientResponse$ as Observable<T>)
      : httpClientResponse$.pipe(
          mergeMap(awsHttpClientResponseToResult({ method, operation, strategies: resultStrategies, url }))
        );
  };
}
