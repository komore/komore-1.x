import { type HttpOperationResponse, type WebResourceLike } from '@azure/core-http';

import { httpClientResponseToJson, type HttpClientResponse } from '@komore/http/client';
import { map, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns an Azure Core HTTP operation response, given an HTTP client response
 *
 * @param request Azure Core HTTP web resource used to create the request
 * @returns Function that returns an Azure Core HTTP operation response, given an HTTP client response
 * @private
 */
export function httpClientResponseToAzureCoreHttpOperationResponse(
  request: WebResourceLike
): (response: HttpClientResponse) => Observable<HttpOperationResponse> {
  const toJson = httpClientResponseToJson();

  return response => {
    const { status } = response;
    const headers = {}; // TODO;

    return toJson(response).pipe(
      map(parsedBody => ({
        headers,
        parsedBody,
        request,
        status,
      }))
    );
  };
}
