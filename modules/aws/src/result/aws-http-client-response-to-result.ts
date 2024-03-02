import { byHttpHeaderName } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';

import { awsHttpClientResponseToJsonResult } from './aws-http-client-response-to-json-result';
import { awsHttpClientResponseToTextResult } from './aws-http-client-response-to-text-result';

/**
 * Creates a function that returns the result from an AWS HTTP client response
 *
 * If the response indicates an error, it gets converted to a proper error
 *
 * @param operation Operation
 * @returns Function that returns the result from an AWS HTTP client response
 * @private
 */
export function awsHttpClientResponseToResult<T>(
  operation: string,
  url: URL
): (response: HttpClientResponse) => Observable<T> {
  const toJson = awsHttpClientResponseToJsonResult<T>(operation);
  const toText = awsHttpClientResponseToTextResult(operation, url);

  return response => {
    const contentType = response.headers.find(byHttpHeaderName('content-type'))?.[1] ?? 'text/html';
    return contentType === 'application/x-amz-json-1.0' ? toJson(response) : toText(response);
  };
}
