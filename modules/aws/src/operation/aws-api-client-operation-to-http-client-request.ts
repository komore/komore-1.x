import { createHash } from '@komore/cryptography';
import { createHostHttpHeader } from '@komore/http';
import { type HttpClientRequest } from '@komore/http/client';
import { map } from '@komore/reactive';

import { createAwsContentSha256HttpHeader } from '../http/create-aws-content-sha256-http-header';
import { createAwsDateHttpHeader } from '../http/create-aws-date-http-header';
import { type AwsApiClientOperationToHttpClientRequestOptions } from './aws-api-client-operation-to-http-client-request-options';
import { type AwsApiClientOperationToHttpClientRequestParameters } from './aws-api-client-operation-to-http-client-request-parameters';

/**
 * Creates a function that returns an HTTP client request, given an operation and parameters
 *
 * @param options Options
 * @returns Function that returns an HTTP client request, given an operation and parameters
 * @private
 */
export function awsApiClientOperationToHttpClientRequest(
  options: AwsApiClientOperationToHttpClientRequestOptions
): (parameters: AwsApiClientOperationToHttpClientRequestParameters) => Observable<HttpClientRequest> {
  const { hashAlgorithm, strategy } = options;
  const hash = createHash({ hashAlgorithm });

  return ({ dateTime, method, operation, parameters, url }) => {
    const { body, headers: additionalHeaders = [] } = strategy({ method, operation, parameters });
    return hash(body ?? '').pipe(
      map(payloadHash => {
        const headers = [
          createHostHttpHeader(url.host),
          // TODO: let the strategy handle these?
          createAwsDateHttpHeader(dateTime),
          createAwsContentSha256HttpHeader(payloadHash),
          ...additionalHeaders,
        ];

        return {
          headers,
          method,
          options: {
            ...(body !== undefined ? { body } : {}),
          },
          url,
        };
      })
    );
  };
}
