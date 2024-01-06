import { type HttpClientResponse } from './http-client-response';

/**
 * Creates a function that tests whether an HTTP client response's status code is within a certain range
 *
 * @param range Minimum and maximum status codes
 * @returns Function that tests whether an HTTP client response's status code is within a certain range
 */
export function httpClientResponseStatusBetween(range: {
  readonly minimum: number;
  readonly maximum?: number;
}): (response: HttpClientResponse) => boolean {
  const { minimum, maximum = Number.MAX_SAFE_INTEGER } = range;
  return ({ status }) => minimum <= status && status <= maximum;
}
