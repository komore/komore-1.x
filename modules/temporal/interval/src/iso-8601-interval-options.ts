/**
 * ISO 8601 interval options
 */
export interface ISO8601IntervalOptions {
  /**
   * Whether to use replace the start or end temporal with a duration
   */
  readonly duration?: 'start' | 'end';

  /**
   * Number of repetitions for a recurring interval
   *
   * Note: `-1` may be used to denote an unbounded number of repetitions
   */
  readonly repetitions?: number;
}
