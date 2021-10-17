/**
 * Invalid Github webhook request error
 */
export class InvalidGithubWebhookRequestError extends Error {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
    this.name = 'InvalidGithubWebhookRequestError';
  }
}
