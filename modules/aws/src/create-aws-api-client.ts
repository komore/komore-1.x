import { mergeMap, tapNext } from '@komore/reactive';

import { type AwsApiClient } from './aws-api-client';
import { type AwsApiClientOptions } from './aws-api-client-options';
import { getDefaultAwsCredentials } from './credentials/get-default-aws-credentials';
import { awsApiClientOperationToHttpClientRequest } from './operation/aws-api-client-operation-to-http-client-request';
import { getDefaultAwsRegion } from './region/get-default-aws-region';
import { awsHttpClientResponseToResult } from './result/aws-http-client-response-to-result';
import { httpClientRequestWithAwsAuthorizationHeader } from './signature/http-client-request-with-aws-authorization-header';

/**
 * Creates an AWS API client
 *
 * @param clientOptions AWS API client options
 * @returns AWS API client
 */
export function createAwsApiClient(clientOptions: AwsApiClientOptions): AwsApiClient {
  const { environmentVariables, httpClient, service } = clientOptions;
  const {
    credentials = getDefaultAwsCredentials(environmentVariables),
    region = getDefaultAwsRegion(environmentVariables),
  } = clientOptions;
  const method = 'POST';
  const url = clientOptions.url?.(region) ?? new URL(`https://${service}.${region}.amazonaws.com/`);
  const hashAlgorithm = 'SHA-256';
  const toHttpClientRequest = awsApiClientOperationToHttpClientRequest({ credentials, hashAlgorithm, url });
  const withAuthorizationHeader = httpClientRequestWithAwsAuthorizationHeader({ credentials, region, service });

  return (operation, parameters) => {
    const dateTime = Temporal.Now.zonedDateTimeISO('UTC').toPlainDateTime();

    return toHttpClientRequest({ dateTime, method, operation, parameters }).pipe(
      mergeMap(withAuthorizationHeader({ dateTime })),
      mergeMap(httpClient),
      tapNext(response => console.log('response', response.status, response.headers)),
      mergeMap(awsHttpClientResponseToResult(operation, url))
    );
  };
}
