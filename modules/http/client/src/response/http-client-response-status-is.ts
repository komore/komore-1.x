import { type HttpClientResponse } from './http-client-response';
import { type HttpClientResponseStatusIsOptions } from './http-client-response-status-is-options';

/**
 * Creates a function that tests whether an HTTP client response's status code matches against a set of status codes
 *
 * @param options List or range of status codes
 * @returns Function that tests whether an HTTP client response's status code matches against a set of status codes
 */
export function httpClientResponseStatusIs(
  options: HttpClientResponseStatusIsOptions
): (response: HttpClientResponse) => boolean {
  if ('minimum' in options) {
    const { minimum, maximum = Number.MAX_SAFE_INTEGER } = options;
    return ({ status }) => minimum <= status && status <= maximum;
  } else {
    const statuses: ReadonlySet<number> = new Set(options.oneOf);
    return ({ status }) => statuses.has(status);
  }
}
