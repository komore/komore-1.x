/**
 * Invalid URL string error
 */
export class InvalidUrlStringError extends Error {
  override readonly name = 'InvalidUrlStringError';
  readonly urlString: string;

  /**
   * Class constructor
   *
   * @param message Message
   * @param urlString URL string
   */
  constructor(message: string, urlString: string) {
    super(message);
    this.urlString = urlString;
  }
}
