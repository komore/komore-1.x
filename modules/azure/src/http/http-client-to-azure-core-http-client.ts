import { type HttpClient as AzureCoreHttpClient } from '@azure/core-http';

import { type HttpClient } from '@komore/http/client';
import { firstValueFrom, mergeMap } from '@komore/reactive';

import { azureCoreHttpWebResourceToHttpClientRequest } from './azure-core-http-web-resource-to-http-client-request';
import { httpClientResponseToAzureCoreHttpOperationResponse } from './http-client-response-to-azure-core-http-operation-response';

export function httpClientToAzureCoreHttpClient(httpClient: HttpClient): AzureCoreHttpClient {
  return {
    sendRequest: webResource => {
      const request = azureCoreHttpWebResourceToHttpClientRequest(webResource);
      const response$ = httpClient(request).pipe(
        mergeMap(httpClientResponseToAzureCoreHttpOperationResponse(webResource))
      );
      return firstValueFrom(response$);
    },
  };
}
