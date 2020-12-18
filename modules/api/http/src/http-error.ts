/**
 * HTTP error
 */
export class HttpError extends Error {
  /**
   * Class constructor
   * @param statusCode Status code
   * @param message Message
   */
  constructor(readonly statusCode: number, message: string) {
    super(message);
  }
}
