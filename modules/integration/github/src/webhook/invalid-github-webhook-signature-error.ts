/**
 * Invalid Github webhook signature error
 */
export class InvalidGithubWebhookSignatureError extends Error {
  readonly name = 'InvalidGithubWebhookSignatureError';

  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
