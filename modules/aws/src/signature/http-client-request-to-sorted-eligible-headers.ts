import { type HttpHeader } from '@komore/http';
import { type HttpClientRequest } from '@komore/http/client';

import { isEligibleAwsCanonicalRequestHttpHeader } from './is-eligible-aws-canonical-request-http-header';

/**
 * Returns a sorted list of eligible HTTP headers, given an HTTP client request
 *
 * @param httpClientRequest HTTP client request
 * @returns Sorted list of eligible HTTP headers
 */
export function httpClientRequestToSortedEligibleHeaders(
  httpClientRequest: HttpClientRequest
): ReadonlyArray<HttpHeader> {
  const { headers = [] } = httpClientRequest;
  const eligibleHeaders = headers.filter(isEligibleAwsCanonicalRequestHttpHeader());
  return eligibleHeaders.toSorted(([lhsName], [rhsName]) => lhsName.localeCompare(rhsName));
}
