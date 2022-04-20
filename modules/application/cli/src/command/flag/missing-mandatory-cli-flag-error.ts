/**
 * Missing mandatory CLI flag error
 */
export class MissingMandatoryCliFlagError extends Error {
  readonly name = 'MissingMandatoryCliFlagError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
