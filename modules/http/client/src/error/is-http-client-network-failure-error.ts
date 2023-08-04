/**
 * Tests whether an error is an HTTP network failure error
 *
 * @param error Error
 * @returns true if the error is an HTTP network failure error
 */
export function isHttpClientNetworkFailureError(error: unknown): error is TypeError {
  return error instanceof TypeError;
}
