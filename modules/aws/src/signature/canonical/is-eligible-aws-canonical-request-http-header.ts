import { type HttpHeader } from '@komore/http';

/**
 * Creates a function that returns true if a HTTP header is eligible to an AWS canonical request
 *
 * @returns Function that returns true if a HTTP header is eligible to an AWS canonical request
 * @private
 */
export function isEligibleAwsCanonicalRequestHttpHeader(): (httpHeader: HttpHeader) => boolean {
  const eligibleHeaders: ReadonlySet<string> = new Set(['content-type', 'host']);
  return ([headerName]) => eligibleHeaders.has(headerName) || headerName.startsWith('x-amz-');
}
