/**
 * HTTP response error
 */
export class HttpResponseError extends Error {
  readonly name = 'HttpResponseError';
  readonly response: Response;

  /**
   * Class constructor
   * @param response Response
   */
  constructor(response: Response) {
    super(`HTTP ${response.status} response`);
    this.response = response;
  }
}
