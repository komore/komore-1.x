import { type HttpHeader } from '@komore/http';

import { isEligibleAwsCanonicalRequestHttpHeader } from './is-eligible-aws-canonical-request-http-header';

/**
 * Returns a sorted list of eligible canonical request headers, given a list of HTTP headers
 *
 * @param httpHeaders List of HTTP headers
 * @returns Sorted list of eligible headers
 */
export function httpHeadersToSortedEligibleCanonicalRequestHeaders(
  httpHeaders: ReadonlyArray<HttpHeader>
): ReadonlyArray<HttpHeader> {
  const eligibleHeaders = httpHeaders.filter(isEligibleAwsCanonicalRequestHttpHeader());
  return eligibleHeaders.toSorted(([lhsName], [rhsName]) => lhsName.localeCompare(rhsName));
}
