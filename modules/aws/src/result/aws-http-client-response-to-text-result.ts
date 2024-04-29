import { httpStatuses } from '@komore/http';
import { httpClientResponseToText, type HttpClientResponse } from '@komore/http/client';
import { mapToError } from '@komore/reactive';
import { asUrlString } from '@komore/url';

import { awsApiError } from '../aws-api.error';
import { type AwsHttpClientResponseToResultOptions } from './aws-http-client-response-to-result-options';

/**
 * Creates a function that maps an AWS HTTP client response to an error based on its text content
 *
 * @param options Options
 * @returns Function that maps an AWS HTTP client response to an error based on its text content
 * @private
 */
export function awsHttpClientResponseToTextResult(
  options: AwsHttpClientResponseToResultOptions
): (httpClientResponse: HttpClientResponse) => Observable<never> {
  const { method, operation, url: operationUrl } = options;
  const toText = httpClientResponseToText();

  return response =>
    toText(response).pipe(
      mapToError(text => {
        const url = asUrlString(operationUrl.toString());
        const statusCode = response.status;
        switch (statusCode) {
          case httpStatuses.NotFound:
            return awsApiError.notFound({ operation, url });
          case httpStatuses.MethodNotAllowed:
            return awsApiError.notAllowed({ method, operation, url });
          case httpStatuses.Ok:
            return awsApiError.unexpectedResponse({ operation, text, url });
          default:
            return awsApiError.unhandledError({ operation, statusCode, text });
        }
      })
    );
}
