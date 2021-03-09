/**
 * Vibration observer options
 */
export interface VibrationObserverOptions {
  /**
   * Stop vibrating when the stream completes
   * @note Defaults to false
   */
  readonly stopOnComplete: boolean;
  /**
   * Stop vibrating when the stream errors
   * @note Defaults to true
   */
  readonly stopOnError: boolean;
}
