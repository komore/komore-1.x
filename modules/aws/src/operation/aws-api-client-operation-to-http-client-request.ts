import { createHash } from '@komore/cryptography';
import { createContentTypeHttpHeader, createHostHttpHeader } from '@komore/http';
import { type HttpClientRequest } from '@komore/http/client';
import { map } from '@komore/reactive';

import { createAwsContentSha256HttpHeader } from '../http/create-aws-content-sha256-http-header';
import { createAwsDateHttpHeader } from '../http/create-aws-date-http-header';
import { createAwsTargetHttpHeader } from '../http/create-aws-target-http-header';
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
  const { hashAlgorithm, url } = options;
  const contentTypeHeader = createContentTypeHttpHeader('application/x-amz-json-1.0');
  const hostHeader = createHostHttpHeader(url.host);
  const baseHeaders = [contentTypeHeader, hostHeader];
  const hash = createHash({ hashAlgorithm });

  return ({ dateTime, method, operation, parameters }) => {
    const body = JSON.stringify(parameters);

    return hash(body).pipe(
      map(payloadHash => {
        const headers = [
          ...baseHeaders,
          createAwsDateHttpHeader(dateTime),
          createAwsTargetHttpHeader(operation),
          createAwsContentSha256HttpHeader(payloadHash),
        ];
        return {
          headers,
          method,
          options: {
            body,
          },
          url,
        };
      })
    );
  };
}
