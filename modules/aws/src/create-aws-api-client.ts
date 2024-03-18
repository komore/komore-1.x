import { mergeMap, tapNext } from '@komore/reactive';

import { type AwsApiClient } from './aws-api-client';
import { type AwsApiClientOptions } from './aws-api-client-options';
import { type AwsApiClientParameters } from './aws-api-client-parameters';
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
  const { environmentVariables, httpClient, service, strategies } = clientOptions;
  const {
    credentials = getDefaultAwsCredentials(environmentVariables),
    region = getDefaultAwsRegion(environmentVariables),
  } = clientOptions;
  const endpointUrl = clientOptions.url?.(region) ?? new URL(`https://${service}.${region}.amazonaws.com/`);
  const { host } = endpointUrl;
  const hashAlgorithm = 'SHA-256';
  const toHttpClientRequest = awsApiClientOperationToHttpClientRequest({ credentials, hashAlgorithm, host });
  const withAuthorizationHeader = httpClientRequestWithAwsAuthorizationHeader({ credentials, region, service });

  return <T>(clientParameters: AwsApiClientParameters & { readonly response?: true }): Observable<T> => {
    const { method = 'POST', operation, parameters, response = false, resourcePath, searchParams } = clientParameters;
    const dateTime = Temporal.Now.zonedDateTimeISO('UTC').toPlainDateTime();
    const url = buildUrl(endpointUrl, resourcePath, searchParams);
    const response$ = toHttpClientRequest({ dateTime, method, operation, parameters, url }).pipe(
      mergeMap(withAuthorizationHeader({ dateTime })),
      mergeMap(httpClient),
      tapNext(({ headers, status }) => console.log('AWS API client response', status, headers))
    );

    return response
      ? (response$ as Observable<T>)
      : response$.pipe(
          mergeMap(awsHttpClientResponseToResult({ method, operation, ...(toXml !== undefined ? { toXml } : {}), url }))
        );
  };
}

function buildUrl(endpointUrl: URL, resourcePath: string | undefined, searchParams: URLSearchParams | undefined): URL {
  return resourcePath !== undefined || searchParams !== undefined
    ? new URL(resourcePath ?? ('' + searchParams !== undefined ? `?${searchParams?.toString()}` : ''), endpointUrl)
    : endpointUrl;
}
