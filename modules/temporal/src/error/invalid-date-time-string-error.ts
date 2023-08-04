/**
 * Invalid date-time string error
 */
export class InvalidDateTimeStringError extends Error {
  override readonly name = 'InvalidDateTimeStringError';
  readonly value: unknown;

  /**
   * Class constructor
   *
   * @param message Message
   * @param value Value
   */
  constructor(message: string, value: unknown) {
    super(message);
    this.value = value;
  }
}
