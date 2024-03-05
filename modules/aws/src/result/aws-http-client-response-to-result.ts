import { byHttpHeaderName } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';

import { awsHttpClientResponseToJsonResult } from './aws-http-client-response-to-json-result';
import { awsHttpClientResponseToTextResult } from './aws-http-client-response-to-text-result';
import { type AwsHttpClientResponseToResultOptions } from './aws-http-client-response-to-result-options';
import { throwError } from '@komore/reactive';
import { awsApiError } from '../aws-api.error';

/**
 * Creates a function that returns the result from an AWS HTTP client response
 *
 * If the response indicates an error, it gets converted to a proper error
 *
 * @param options Options
 * @returns Function that returns the result from an AWS HTTP client response
 * @private
 */
export function awsHttpClientResponseToResult<T>(
  options: AwsHttpClientResponseToResultOptions
): (response: HttpClientResponse) => Observable<T> {
  const { operation } = options;
  const toJson = awsHttpClientResponseToJsonResult<T>(options);
  const toText = awsHttpClientResponseToTextResult(options);

  return response => {
    const contentType = response.headers.find(byHttpHeaderName('content-type'))?.[1] ?? 'text/html';
    switch (contentType) {
      case 'application/json':
      case 'application/x-amz-json-1.0':
      case 'application/x-amz-json-1.1':
        return toJson(response);
      case 'application/xml':
        const { toXml } = options;
        return toXml !== undefined
          ? toXml(response)
          : throwError(() => awsApiError.unsupportedResponseType({ contentType, operation }));
      case 'text/html':
        return toText(response);
      default:
        return throwError(() => awsApiError.unsupportedResponseType({ contentType, operation }));
    }
  };
}
