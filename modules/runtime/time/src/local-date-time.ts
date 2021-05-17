import type { TemporalWithDate } from './temporal-with-date';
import type { TemporalWithTime } from './temporal-with-time';

/**
 * Local date time
 */
export interface LocalDateTime extends TemporalWithDate, TemporalWithTime {
  /**
   * Internal marker
   * @private
   */
   readonly _t: 'local-date-time';
}
