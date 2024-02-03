/**
 * Retry options
 */
export interface RetryOptions {
  /**
   * The maximum number of retries (defaults to infinite)
   */
  readonly count: number;
  /**
   * Delay in milliseconds or function that emits when the subscription should be retried (defaults to 0 milliseconds)
   */
  readonly delay: number | ((error: unknown, retryCount: number) => Observable<unknown>);
  /**
   * Whether or not to reset the retry counter when the retried subscription emits its first value (defaults to true)
   */
  readonly resetOnSuccess: boolean;
}
