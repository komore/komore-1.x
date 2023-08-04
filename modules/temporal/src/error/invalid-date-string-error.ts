/**
 * Invalid date string error
 */
export class InvalidDateStringError extends Error {
  override readonly name = 'InvalidDateStringError';
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
