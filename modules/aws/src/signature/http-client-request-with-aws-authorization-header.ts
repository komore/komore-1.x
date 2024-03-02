import { type HttpClientRequest } from '@komore/http/client';
import { map } from '@komore/reactive';

import { httpClientRequestToAwsSignatureAuthorizationHttpHeader } from './http-client-request-to-aws-signature-authorization-http-header';
import { type HttpClientRequestWithAwsAuthorizationHeaderOptions } from './http-client-request-with-aws-authorization-header-options';

/**
 *
 * @param options
 * @returns
 * @private
 */
export function httpClientRequestWithAwsAuthorizationHeader(
  options: HttpClientRequestWithAwsAuthorizationHeaderOptions
): (options: {
  readonly dateTime: Temporal.PlainDateTime;
}) => (httpClientRequest: HttpClientRequest) => Observable<HttpClientRequest> {
  const { credentials, region, service } = options;
  const toAuthorizationHeader = httpClientRequestToAwsSignatureAuthorizationHttpHeader({
    credentials,
    region,
    service,
  });

  return ({ dateTime }) =>
    httpClientRequest =>
      toAuthorizationHeader({ dateTime, httpClientRequest }).pipe(
        map(
          authorizationHeader =>
            ({
              ...httpClientRequest,
              headers: [...(httpClientRequest.headers ?? []), authorizationHeader],
            }) as const
        )
      );
}
