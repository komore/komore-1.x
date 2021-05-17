import type { TemporalWithDate } from './temporal-with-date';
import type { TemporalWithTime } from './temporal-with-time';

/**
 * Offset date time
 */
export interface OffsetDateTime extends TemporalWithDate, TemporalWithTime {
  /**
   * Internal marker
   * @private
   */
  readonly _t: 'offset-date-time';
}
