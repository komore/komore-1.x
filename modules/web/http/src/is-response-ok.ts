/**
 * Tests whether a response indicates success
 * @param response Response
 * @returns true if the response indicates a success
 */
export function isResponseOk(response: Response): boolean {
  return response.ok;
}
