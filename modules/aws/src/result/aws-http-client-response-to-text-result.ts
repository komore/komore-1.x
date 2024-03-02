import { httpStatuses } from '@komore/http';
import { httpClientResponseToText, type HttpClientResponse } from '@komore/http/client';
import { mapToError } from '@komore/reactive';
import { asUrlString } from '@komore/url';

import { awsApiError } from '../aws-api.error';

/**
 *
 * @param operation
 * @param operationUrl
 * @returns
 * @private
 */
export function awsHttpClientResponseToTextResult(
  operation: string,
  operationUrl: URL
): (httpClientResponse: HttpClientResponse) => Observable<never> {
  const toText = httpClientResponseToText();

  return response =>
    toText(response).pipe(
      mapToError(text => {
        const statusCode = response.status;
        console.log('content', text);
        const url = asUrlString(operationUrl.toString());
        switch (statusCode) {
          case httpStatuses.NotFound:
            return awsApiError.notFound({ operation, url });
          case httpStatuses.Ok:
            return awsApiError.unexpectedResponse({ operation, text, url });
          default:
            return awsApiError.unhandledError({ operation, statusCode, text });
        }
      })
    );
}
