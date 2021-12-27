/**
 * No GPU adapter found error
 */
export class NoGPUAdapterFoundError extends Error {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(message);
    this.name = 'NoGPUAdapterFoundError';
  }
}
