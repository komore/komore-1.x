/**
 * HTTP client response error
 */
export class HttpClientResponseError extends Error {
  override readonly name = 'HttpClientResponseError';
  readonly response: Response;

  /**
   * Class constructor
   *
   * @param response Response
   */
  constructor(response: Response) {
    super(`HTTP ${response.status} response`);
    this.response = response;
  }
}
