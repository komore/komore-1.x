/**
 * Retry options
 */
export interface RetryOptions {
  /**
   * The maximum number of retries (defaults to infinite)
   */
  readonly count: number;
  /**
   * Whether or not to reset the retry counter when the retried subscription emits its first value (defaults to true)
   */
  readonly resetOnSuccess: boolean;
}
