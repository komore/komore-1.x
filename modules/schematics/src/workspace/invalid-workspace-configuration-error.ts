/**
 * Invalid workspace configuration error
 */
export class InvalidWorkspaceConfigurationError extends Error {
  readonly name = 'InvalidWorkspaceConfigurationError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
