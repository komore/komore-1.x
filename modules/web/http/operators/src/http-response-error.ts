/**
 * HTTP response error
 */
export class HttpResponseError extends Error {
  /**
   * Class constructor
   * @param response Response
   */
  constructor(readonly response: Response) {
    super(`HTTP ${response.status} response`);
    this.name = 'HttpResponseError';
  }
}
