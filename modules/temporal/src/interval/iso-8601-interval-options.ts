/**
 * ISO 8601 interval options
 */
export interface ISO8601IntervalOptions {
  /**
   * Use an ISO 8601 duration rather than an ISO 8601 temporal for either the start or the end
   */
  readonly durationFor?: 'start' | 'end';
  /**
   * Number of recurring repetitions
   *
   * When set, a recurring ISO 8601 interval string is built, with the number of defined repetitions.
   */
  readonly recurringRepetitions?: number;
}
