/**
 * Timeout information
 *
 * @template T Value type
 */
export interface TimeoutInfo<T> {
  /**
   * Last value
   */
  readonly lastValue?: T;
  /**
   * Number of values seen before the timeout
   */
  readonly valueCount: number;
}
