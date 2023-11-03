/**
 * Assertion error
 */
export class AssertionError extends Error {
  override readonly name = 'AssertionError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
