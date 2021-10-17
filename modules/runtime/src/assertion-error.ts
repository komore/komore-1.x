/**
 * Assertion error
 */
export class AssertionError extends Error {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
    this.name = 'AssertionError';
  }
}
