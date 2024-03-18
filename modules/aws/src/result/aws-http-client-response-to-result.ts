import { byHttpHeaderName } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';
import { throwError } from '@komore/reactive';

import { awsApiError } from '../aws-api.error';
import { type AwsHttpClientResponseToResultOptions } from './aws-http-client-response-to-result-options';
import { awsHttpClientResponseToTextResult } from './aws-http-client-response-to-text-result';

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
  const { operation, strategies } = options;
  const toText = awsHttpClientResponseToTextResult(options);

  return httpClientResponse => {
    const contentType = httpClientResponse.headers.find(byHttpHeaderName('content-type'))?.[1];
    if (contentType === undefined) {
      return toText(httpClientResponse);
    }

    const strategy = strategies.find(({ mediaTypes }) => mediaTypes.has(contentType));
    if (strategy === undefined) {
      return throwError(() => awsApiError.unsupportedResponseType({ contentType, operation }));
    }

    return strategy.httpClientResponseToResult(httpClientResponse);
  };
}
