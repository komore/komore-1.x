import { type WebResourceLike } from '@azure/core-http';

import { type HttpClientRequest } from '@komore/http/client';
import { azureCoreHttpHeaderToHttpHeader } from './azure-core-http-header-to-http-header';

/**
 * Returns an HTTP client request, given an Azure Core HTTP web resource
 *
 * @param webResource Web resource
 * @returns HTTP client request
 * @private
 */
export function azureCoreHttpWebResourceToHttpClientRequest(webResource: WebResourceLike): HttpClientRequest {
  const { method } = webResource;
  const headers = webResource.headers.headersArray().map(azureCoreHttpHeaderToHttpHeader);
  const url = new URL(webResource.url);

  return {
    url,
    headers,
    method,
    // TODO: options,
  };
}
