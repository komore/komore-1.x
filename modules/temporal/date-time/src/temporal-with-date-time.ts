import type { TemporalWithDate } from '@komore/temporal/date';
import type { TemporalWithTime } from '@komore/temporal/time';

/**
 * Temporal with date and time
 */
export interface TemporalWithDateTime extends TemporalWithDate, TemporalWithTime {
  /**
   * Internal marker
   * @private
   */
  readonly _withDateTime: never;
}
