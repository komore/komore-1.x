/**
 * Invalid GitHub webhook request error
 */
export class InvalidGithubWebhookRequestError extends Error {
  readonly name = 'InvalidGithubWebhookRequestError';

  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
