/**
 * Invalid Gherkin data error
 */
export class InvalidGherkinDataError extends Error {
  readonly data: string;
  readonly type = 'InvalidGherkinDataError';

  /**
   * Class constructor
   *
   * @param message Message
   * @param data Data
   */
  constructor(message: string, data: string) {
    super(message);
    this.data = data;
  }
}
