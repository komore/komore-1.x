/**
 * az CLI not found error
 */
export class AzCliNotFoundError extends Error {
  readonly name = 'AzCliNotFoundError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
