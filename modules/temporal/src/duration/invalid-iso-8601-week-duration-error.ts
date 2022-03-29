/**
 * Invalid ISO 8601 week duration error
 */
export class InvalidISO8601WeekDurationError extends Error {
  readonly name = 'InvalidISO8601WeekDurationError';
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
