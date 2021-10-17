/**
 * Invalid Github webhook signature error
 */
export class InvalidGithubWebhookSignatureError extends Error {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
    this.name = 'InvalidGithubWebhookSignatureError';
  }
}
