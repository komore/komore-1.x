import { type HttpClientResponse } from './http-client-response';

/**
 * Creates a function that tests whether an HTTP client response's status code matches against a set of status codes
 *
 * @param statusCodes List of status codes that cause an HTTP response error to be thrown
 * @returns Function that tests whether an HTTP client response's status code matches against a set of status codes
 */
export function httpClientResponseStatusIn(
  ...statusCodes: ReadonlyArray<number>
): (response: HttpClientResponse) => boolean {
  const statuses: ReadonlySet<number> = new Set(statusCodes);
  return ({ status }) => statuses.has(status);
}
