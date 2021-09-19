/**
 * Router navigation error
 */
export class RouterNavigationError extends Error {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
    this.name = 'RouterNavigationError';
  }
}
