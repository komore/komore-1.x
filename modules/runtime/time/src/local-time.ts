import type { TemporalWithTime } from './temporal-with-time';

/**
 * Local time
 */
export interface LocalTime extends TemporalWithTime {
  /**
   * Internal marker
   * @private
   */
  readonly _t: 'local-time';
}
