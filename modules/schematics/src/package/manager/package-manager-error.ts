/**
 * Package manager error
 */
export class PackageManagerError extends Error {
  readonly name = 'PackageManagerError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
