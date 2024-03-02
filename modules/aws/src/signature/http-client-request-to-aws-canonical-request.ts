import { type HttpHeader } from '@komore/http';
import { type HttpClientRequest } from '@komore/http/client';
import { map } from '@komore/reactive';

import { type AwsCanonicalRequest } from './aws-canonical-request';
import { httpClientRequestToSortedEligibleHeaders } from './http-client-request-to-sorted-eligible-headers';
import { httpClientRequestToAwsCanonicalQueryString } from './http-client-request-to-aws-canonical-query-string';

/**
 * Creates a function that returns an AWS canonical request, given an HTTP client request
 *
 * @param hash Hash function
 * @returns Function that returns an AWS canonical request, given an HTTP client request
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html#create-canonical-request Step 1: Create a canonical request}
 * @private
 */
export function httpClientRequestToAwsCanonicalRequest(
  hash: (value: string) => Observable<string>
): (httpClientRequest: HttpClientRequest) => Observable<AwsCanonicalRequest> {
  return httpClientRequest => {
    const {
      method: httpMethod = 'GET',
      options,
      url: { pathname: canonicalUri },
    } = httpClientRequest;
    const canonicalQueryString = httpClientRequestToAwsCanonicalQueryString(httpClientRequest);
    const sortedEligibleHeaders = httpClientRequestToSortedEligibleHeaders(httpClientRequest);
    const canonicalHeaders = sortedEligibleHeaders.map(httpHeaderToFormattedValue).join('\n');
    const signedHeaderNames = sortedEligibleHeaders.map(([headerName]) => headerName);
    const signedHeaders = signedHeaderNames.join(';');
    const payload = (options?.body ?? '') as string;

    return hash(payload).pipe(
      map(hashedPayload => ({
        canonicalHeaders,
        canonicalQueryString,
        canonicalUri,
        hashedPayload,
        httpMethod,
        signedHeaderNames,
        signedHeaders,
      }))
    );
  };
}

/**
 * Returns a formatted value, given an HTTP header
 *
 * @param httpHeader HTTP header
 * @returns Formatted value
 * @private
 */
function httpHeaderToFormattedValue(httpHeader: HttpHeader): string {
  const [name, value] = httpHeader;
  return `${name}:${value}`;
}
