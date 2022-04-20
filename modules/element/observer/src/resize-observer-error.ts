/**
 * Resize observer error
 */
export class ResizeObserverError extends Error {
  readonly name = 'ResizeObserverError';

  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
