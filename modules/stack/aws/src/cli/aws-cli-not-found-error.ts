/**
 * aws CLI not found error
 */
export class AwsCliNotFoundError extends Error {
  readonly name = 'AwsCliNotFoundError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
