/**
 * HTTP error response
 */
export class HttpErrorResponse extends Error {
  /**
   * Class constructor
   * @param response Response
   */
  constructor(readonly response: Response) {
    super(`HTTP ${response.status} response`);
    this.name = 'HttpErrorResponse';
  }
}
