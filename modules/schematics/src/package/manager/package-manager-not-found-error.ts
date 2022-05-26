/**
 * Package manager not found error
 */
export class PackageManagerNotFoundError extends Error {
  readonly name = 'PackageManagerNotFoundError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
