/**
 * Creates a function that tests whether an HTTP client response's status code is within a certain range
 *
 * @param range Minimum and maximum status codes
 * @returns Function that tests whether an HTTP client response's status code is within a certain range
 */
export function responseStatusBetween(range: {
  readonly minimum: number;
  readonly maximum?: number;
}): (response: Response) => boolean {
  const { minimum, maximum = Number.MAX_SAFE_INTEGER } = range;
  return ({ status }) => minimum <= status && status <= maximum;
}
