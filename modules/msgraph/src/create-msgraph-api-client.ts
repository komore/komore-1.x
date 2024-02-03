import { createAcceptHttpHeader } from '@komore/http';
import { httpClientResponseToJson, httpClientResponseToText } from '@komore/http/client';
import { map, mergeMap } from '@komore/reactive';

import { type MsGraphApiClient } from './msgraph-api-client';
import { type MsGraphApiClientOptions } from './msgraph-api-client-options';

/**
 * Creates a Microsoft Graph API client
 *
 * @param clientOptions Microsoft Graph API client options
 * @returns Microsoft Graph API client
 */
export function createMsGraphApiClient(clientOptions: MsGraphApiClientOptions): MsGraphApiClient {
  const {
    endpointUrl: baseEndpointUrl = new URL('https://graph.microsoft.com/'),
    httpClient,
    version = 'v1.0',
  } = clientOptions;
  const endpointUrl = new URL(`${version}/`, baseEndpointUrl);
  const headers = [createAcceptHttpHeader('application/json')];

  return <ResponseType>(
    method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT',
    resourcePath: string,
    _payload?: unknown
  ) => {
    const url = new URL(resourcePath, endpointUrl);

    if (method === 'GET' && resourcePath === '$metadata') {
      // Special case for /$metadata which returns XML rather than JSON
      return httpClient({ method, url }).pipe(
        mergeMap(httpClientResponseToText()),
        map(response => response as ResponseType)
      );
    }

    return httpClient({ headers, method, url }).pipe(mergeMap(httpClientResponseToJson<ResponseType>()));
  };
}
