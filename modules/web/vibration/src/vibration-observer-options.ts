/**
 * Vibration observer options
 */
export type VibrationObserverOptions = Readonly<{
  /**
   * Stop vibrating when the stream completes
   * @note Defaults to false
   */
  stopOnComplete: boolean;
  /**
   * Stop vibrating when the stream errors
   * @note Defaults to true
   */
  stopOnError: boolean;
}>;
