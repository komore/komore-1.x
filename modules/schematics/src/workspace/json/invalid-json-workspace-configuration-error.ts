/**
 * Invalid JSON workspace configuration error
 */
export class InvalidJsonWorkspaceConfigurationError extends Error {
  readonly name = 'InvalidJsonWorkspaceConfigurationError';
  readonly propertyPath: string;

  /**
   * Class constructor
   *
   * @param propertyPath Property path
   * @param message Message
   */
  constructor(propertyPath: string, message: string) {
    super(`invalid value for JSON workspace property ${propertyPath}: ${message}`);
    this.propertyPath = propertyPath;
  }
}
