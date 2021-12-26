/**
 * Resize observer error
 */
export class ResizeObserverError extends Error {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
    this.name = 'ResizeObserverError';
  }
}
