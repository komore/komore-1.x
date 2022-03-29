/**
 * Invalid ISO 8601 interval error
 */
export class InvalidISO8601IntervalError extends Error {
  readonly name = 'InvalidISO8601IntervalError';
  readonly invalidString: string;

  /**
   * Class constructor
   * @param message Message
   * @param invalidString ISO 8601 string
   */
  constructor(message: string, invalidString: string) {
    super(message);
    this.invalidString = invalidString;
  }
}
